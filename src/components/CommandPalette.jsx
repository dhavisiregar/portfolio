import { useEffect, useMemo, useRef, useState } from "react";
import { Command } from "cmdk";
import { m, AnimatePresence } from "framer-motion";
import { CONTACT, SOCIAL_LINKS, FUN_FACTS, UI_TEXT } from "../constants";
import { useLanguage, useTranslate } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input:not([disabled])';

const SECTIONS = [
  { id: "about", label: UI_TEXT.nav.about },
  { id: "technologies", label: UI_TEXT.nav.technologies },
  { id: "experience", label: UI_TEXT.nav.experience },
  { id: "projects", label: UI_TEXT.nav.projects },
  { id: "contact", label: UI_TEXT.nav.contact },
];

const CONFETTI_COLORS = ["#D9A54A", "#F3EEE4", "#5EEAD4", "#F472B6", "#60A5FA"];

// Items whose `value` starts with "secret " are excluded from the default
// (empty-query) list, but still match once the user types a substring of
// their value — that's the whole "hidden until you go looking" mechanic.
const commandFilter = (value, search) => {
  const isSecret = value.startsWith("secret ");
  if (!search) return isSecret ? 0 : 1;
  return value.toLowerCase().includes(search.toLowerCase()) ? 1 : 0;
};

const Confetti = ({ burstKey }) => {
  const pieces = useMemo(() => {
    if (!burstKey) return [];
    return Array.from({ length: 60 }, (_, i) => ({
      id: `${burstKey}-${i}`,
      left: Math.random() * 100,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      delay: Math.random() * 0.4,
      duration: 2 + Math.random() * 1.5,
      rotate: (Math.random() - 0.5) * 720,
      width: 5 + Math.random() * 5,
      height: 10 + Math.random() * 6,
    }));
  }, [burstKey]);

  if (pieces.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[300] overflow-hidden"
      aria-hidden="true"
    >
      {pieces.map((p) => (
        <m.span
          key={p.id}
          initial={{ y: "-5vh", opacity: 1, rotate: 0 }}
          animate={{ y: "105vh", rotate: p.rotate, opacity: [1, 1, 0] }}
          transition={{ duration: p.duration, delay: p.delay, ease: "easeIn" }}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            width: p.width,
            height: p.height,
            backgroundColor: p.color,
            borderRadius: 1,
          }}
        />
      ))}
    </div>
  );
};

const FunFactToast = ({ fact, onDismiss }) => {
  useEffect(() => {
    if (!fact) return undefined;
    const timer = setTimeout(onDismiss, 6000);
    return () => clearTimeout(timer);
  }, [fact, onDismiss]);

  return (
    <AnimatePresence>
      {fact && (
        <m.div
          role="status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-1/2 z-[300] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-lg border border-accent/40 bg-surface-raised p-4 text-sm text-fg shadow-2xl"
        >
          <p>{fact}</p>
          <button
            onClick={onDismiss}
            className="mt-2 text-xs font-semibold text-accent hover:text-accent-hover"
          >
            {UI_TEXT.commandPalette.dismiss.id}
          </button>
        </m.div>
      )}
    </AnimatePresence>
  );
};

const CommandPalette = ({ open, onOpenChange }) => {
  const t = useTranslate();
  const { toggleLanguage } = useLanguage();
  const { toggleTheme } = useTheme();
  const [confettiBurst, setConfettiBurst] = useState(null);
  const [funFact, setFunFact] = useState(null);
  const dialogRef = useRef(null);

  // Cmd+K / Ctrl+K toggles the palette from anywhere on the page.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onOpenChange]);

  // Lock body scroll, and trap + return focus, while the palette is open —
  // same pattern as ProjectModal.jsx. (Using the bare `Command` primitive
  // rather than `Command.Dialog` for full control over the overlay/backdrop
  // styling, which means this modal shell is on us, not cmdk.)
  useEffect(() => {
    if (!open) return undefined;

    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [open]);

  const runCommand = (fn) => {
    onOpenChange(false);
    fn();
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const triggerConfetti = () => {
    const key = Date.now();
    setConfettiBurst(key);
    setTimeout(() => {
      setConfettiBurst((current) => (current === key ? null : current));
    }, 3500);
  };

  const showFunFact = () => {
    const fact = FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)];
    setFunFact(t(fact));
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <m.div
              className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => onOpenChange(false)}
              aria-hidden="true"
            />
            <div className="fixed inset-0 z-[201] flex items-start justify-center px-4 pt-24 pointer-events-none sm:pt-32">
              <m.div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label={t(UI_TEXT.commandPalette.dialogLabel)}
                initial={{ opacity: 0, y: -16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="pointer-events-auto w-full max-w-lg overflow-hidden rounded-lg border border-border bg-surface-raised shadow-2xl"
              >
                <Command
                  label={t(UI_TEXT.commandPalette.dialogLabel)}
                  filter={commandFilter}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") onOpenChange(false);
                  }}
                >
                  <Command.Input
                    autoFocus
                    placeholder={t(UI_TEXT.commandPalette.placeholder)}
                    className="w-full border-b border-border bg-transparent px-4 py-3 text-sm text-fg placeholder:text-fg-muted focus:outline-none"
                  />
                  <Command.List className="max-h-80 overflow-y-auto p-2">
                    <Command.Empty className="p-4 text-center text-sm text-fg-muted">
                      {t(UI_TEXT.commandPalette.empty)}
                    </Command.Empty>

                    <Command.Group
                      heading={t(UI_TEXT.commandPalette.groupNavigate)}
                      className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-fg-muted"
                    >
                      {SECTIONS.map((section) => (
                        <Command.Item
                          key={section.id}
                          value={t(section.label)}
                          onSelect={() =>
                            runCommand(() => scrollToSection(section.id))
                          }
                          className="cursor-pointer rounded px-3 py-2 text-sm text-fg-subtle aria-selected:bg-surface aria-selected:text-accent"
                        >
                          {t(section.label)}
                        </Command.Item>
                      ))}
                    </Command.Group>

                    <Command.Group
                      heading={t(UI_TEXT.commandPalette.groupConnect)}
                      className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-fg-muted"
                    >
                      {SOCIAL_LINKS.filter(
                        (s) => s.label === "GitHub" || s.label === "LinkedIn"
                      ).map((social) => (
                        <Command.Item
                          key={social.label}
                          value={social.label}
                          onSelect={() =>
                            runCommand(() =>
                              window.open(
                                social.href,
                                "_blank",
                                "noopener,noreferrer"
                              )
                            )
                          }
                          className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm text-fg-subtle aria-selected:bg-surface aria-selected:text-accent"
                        >
                          <social.icon />
                          {social.label}
                        </Command.Item>
                      ))}
                      <Command.Item
                        value={t(UI_TEXT.commandPalette.emailItem)}
                        onSelect={() =>
                          runCommand(() => {
                            window.location.href = `mailto:${CONTACT.email}`;
                          })
                        }
                        className="cursor-pointer rounded px-3 py-2 text-sm text-fg-subtle aria-selected:bg-surface aria-selected:text-accent"
                      >
                        {t(UI_TEXT.commandPalette.emailItem)}
                      </Command.Item>
                    </Command.Group>

                    <Command.Group
                      heading={t(UI_TEXT.commandPalette.groupSettings)}
                      className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-fg-muted"
                    >
                      <Command.Item
                        value={t(UI_TEXT.commandPalette.toggleLanguageItem)}
                        onSelect={() => runCommand(toggleLanguage)}
                        className="cursor-pointer rounded px-3 py-2 text-sm text-fg-subtle aria-selected:bg-surface aria-selected:text-accent"
                      >
                        {t(UI_TEXT.commandPalette.toggleLanguageItem)}
                      </Command.Item>
                      <Command.Item
                        value={t(UI_TEXT.commandPalette.toggleThemeItem)}
                        onSelect={() => runCommand(toggleTheme)}
                        className="cursor-pointer rounded px-3 py-2 text-sm text-fg-subtle aria-selected:bg-surface aria-selected:text-accent"
                      >
                        {t(UI_TEXT.commandPalette.toggleThemeItem)}
                      </Command.Item>
                    </Command.Group>

                    {/* Easter eggs — hidden from the default list via
                        commandFilter (value starts with "secret "), only
                        surfaced once the user types a matching word. */}
                    <Command.Item
                      value="secret party confetti celebrate"
                      onSelect={() => runCommand(triggerConfetti)}
                      className="cursor-pointer rounded px-3 py-2 text-sm text-fg-subtle aria-selected:bg-surface aria-selected:text-accent"
                    >
                      {t(UI_TEXT.commandPalette.partyMode)}
                    </Command.Item>
                    <Command.Item
                      value="secret fun fact about sultan"
                      onSelect={() => runCommand(showFunFact)}
                      className="cursor-pointer rounded px-3 py-2 text-sm text-fg-subtle aria-selected:bg-surface aria-selected:text-accent"
                    >
                      {t(UI_TEXT.commandPalette.funFact)}
                    </Command.Item>
                  </Command.List>
                </Command>
              </m.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <Confetti burstKey={confettiBurst} />
      <FunFactToast fact={funFact} onDismiss={() => setFunFact(null)} />
    </>
  );
};

export default CommandPalette;

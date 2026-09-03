import { CONTACT, UI_TEXT } from "../constants";
import { useTranslate } from "../i18n/LanguageContext";
import { m } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const t = useTranslate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  // `status` is a type ("success" | "error" | null), not the rendered
  // message text — that way the message stays correctly translated even if
  // the user switches language after submitting.
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{ position: "relative", zIndex: 1000 }}
      className="border-b border-border pb-20"
    >
      <m.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center font-display text-4xl italic text-fg"
      >
        {t(UI_TEXT.contact.heading)}{" "}
        <span className="text-fg-muted">
          {t(UI_TEXT.contact.headingHighlight)}
        </span>
      </m.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Contact Information */}
        <m.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-fg">
              {t(UI_TEXT.contact.infoTitle)}
            </h3>
            <p className="text-fg-muted">{CONTACT.address}</p>
            <p className="text-fg-muted">{CONTACT.phoneNo}</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-fg-muted hover:text-accent transition-colors"
            >
              {CONTACT.email}
            </a>
          </div>
        </m.div>

        {/* Contact Form */}
        <m.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-fg">
            {t(UI_TEXT.contact.formTitle)}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-fg-muted mb-1"
              >
                {t(UI_TEXT.contact.nameLabel)}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-surface-raised border border-border rounded-md text-fg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder={t(UI_TEXT.contact.namePlaceholder)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-fg-muted mb-1"
              >
                {t(UI_TEXT.contact.emailLabel)}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-surface-raised border border-border rounded-md text-fg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder={t(UI_TEXT.contact.emailPlaceholder)}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-fg-muted mb-1"
              >
                {t(UI_TEXT.contact.messageLabel)}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-surface-raised border border-border rounded-md text-fg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder={t(UI_TEXT.contact.messagePlaceholder)}
              ></textarea>
            </div>
            {submitStatus && (
              <div
                className={`p-3 rounded-md ${
                  submitStatus === "success"
                    ? "bg-green-900/50 text-green-300"
                    : "bg-red-900/50 text-red-300"
                }`}
              >
                {submitStatus === "success"
                  ? t(UI_TEXT.contact.successMsg)
                  : t(UI_TEXT.contact.errorMsg)}
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full px-6 py-3 font-semibold ${
                isLoading
                  ? "bg-surface-border text-fg-muted cursor-not-allowed"
                  : "bg-accent hover:bg-accent-hover text-accent-ink"
              } rounded-md transition-colors`}
            >
              {isLoading ? t(UI_TEXT.contact.sending) : t(UI_TEXT.contact.send)}
            </button>
          </form>
        </m.div>
      </div>
    </div>
  );
};

export default Contact;

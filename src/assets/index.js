// Auto-discovers every image in this folder via Vite's import.meta.glob,
// so adding a new file here doesn't require a manual `import x from "./y.png"`
// statement in every component that needs it.
//
// `eager: true` keeps the same behavior as static imports (images are bundled
// and resolved to hashed URLs at build time, no runtime lazy-chunking).
const modules = import.meta.glob("./*.{png,jpg,jpeg,svg,webp,gif}", {
  eager: true,
  import: "default",
});

// Map "1.png" -> resolved asset URL, keyed by filename so callers can do
// images["1.png"] instead of tracking a separate `import project1 from ...`.
export const images = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.replace("./", ""), url])
);

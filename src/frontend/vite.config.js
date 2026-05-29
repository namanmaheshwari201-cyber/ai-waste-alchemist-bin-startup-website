import { defineConfig } from "vite";

// Static HTML-only build — no React plugin, no Tailwind, no backend wiring.
// The entire site is a single self-contained index.html with inline CSS/JS.
export default defineConfig({
  logLevel: "error",
  root: ".",
  build: {
    emptyOutDir: true,
    sourcemap: false,
    minify: false,
    rollupOptions: {
      input: "index.html",
    },
  },
  server: {
    port: 3000,
  },
});

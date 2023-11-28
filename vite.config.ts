import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteHtmlPlugin from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteHtmlPlugin()],
  server: {
    host: "0.0.0.0", // e.g., 'localhost' or '0.0.0.0'
  },
});

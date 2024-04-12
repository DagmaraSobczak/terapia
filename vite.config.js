import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/terapia/",
  server: {
    // Ustawienie MIME type dla plików .jsx
    mimeTypes: {
      "application/javascript": ["js", "jsx"],
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import path from "path"; // Import 'path' for alias resolution

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Add this alias
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});

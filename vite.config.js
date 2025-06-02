import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/fineanmol.github.io/",
  plugins: [react()],
  build: {
    outDir: "build",
  },
});

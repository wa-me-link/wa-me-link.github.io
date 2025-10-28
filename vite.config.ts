import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/",
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "public"),
    },
  },
  root: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
}));

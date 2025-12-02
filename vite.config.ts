import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // GitHub Pages base path - using '/' for custom domain
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    // Ensure proper asset handling for GitHub Pages
    assetsDir: 'assets',
    // Use explicit file extensions to help with MIME type detection
    rollupOptions: {
      output: {
        // Ensure JS files have .js extension explicitly
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

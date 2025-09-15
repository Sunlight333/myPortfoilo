import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'lucide-react': ['lucide-react'],
          'ui-components': [
            '@/components/ui/button',
            '@/components/ui/card',
            '@/components/ui/badge',
            '@/components/ui/tabs',
            '@/components/ui/dialog'
          ],
          // Page chunks
          'projects': ['./src/pages/Projects.tsx'],
          'about': ['./src/pages/About.tsx'],
          'contact': ['./src/pages/Contact.tsx'],
          'resume': ['./src/pages/Resume.tsx'],
          // Component chunks
          'project-components': [
            './src/components/ProjectCard.tsx',
            './src/components/ProjectDetailModal.tsx',
            './src/components/LazyImage.tsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
}));

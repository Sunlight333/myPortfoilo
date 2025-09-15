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
    dedupe: ['react', 'react-dom']
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Conservative chunking to avoid React context issues
          if (id.includes('node_modules')) {
            // Keep all React-related packages together
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler') || id.includes('@types/react')) {
              return 'react-vendor';
            }
            // Keep UI libraries together
            if (id.includes('@radix-ui') || id.includes('class-variance-authority') || id.includes('clsx') || id.includes('tailwind-merge') || id.includes('lucide-react')) {
              return 'ui-vendor';
            }
            // Keep animation libraries together
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            // Keep other vendor libraries together
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
    force: true
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
}));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import pluginChecker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  base: "/generative-art-machine/",
  plugins: [react(), tailwindcss(), pluginChecker({ typescript: true })],
  esbuild: {
    loader: "jsx",
    include: /.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  build: {
    outDir: "dist", // Output directory
    emptyOutDir: true, // Clear output directory before build
    sourcemap: true, // Generate sourcemaps
    rollupOptions: {
      // Rollup specific options
      input: "index.html", // Entry point for the build
      output: {
        // Output format and naming
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});

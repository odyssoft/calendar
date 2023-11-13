//vite.config.js
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { visualizer} from 'rollup-plugin-visualizer'
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";


export default defineConfig ({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "@odyssoft/calendar",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      // output: {
      //   preserveModules: true,
      // }
      output: {
        globals: {
          react: "React",
        },
        exports: 'named'
      },
    },
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    visualizer(),
    dts(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      jsx: 'automatic'
    }
  }
});

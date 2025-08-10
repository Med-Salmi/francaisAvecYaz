import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  appType: "mpa", // multi-page app
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        fiches: resolve(__dirname, "fiches.html"),
      },
    },
  },
});

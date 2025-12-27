// app.config.ts
import { defineConfig } from "@solidjs/start/config";
import path from "path";
var app_config_default = defineConfig({
  ssr: true,
  server: {
    preset: "cloudflare-pages"
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
  }
});
export {
  app_config_default as default
};

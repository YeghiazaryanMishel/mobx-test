import { defineConfig } from "vite";
import swc from "unplugin-swc";

export default defineConfig({
  plugins: [
    swc.vite({
      jsc: {
        parser: {
          syntax: "typescript",
          decorators: true,
        },
        transform: {
          decoratorMetadata: true,
          decoratorVersion: "2022-03",
          react: {
            runtime: "automatic",
          },
        },
      },
    }),
  ],
});

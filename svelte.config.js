import adapter from '@sveltejs/adapter-auto';
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      "@": resolve("./src"),
    },
    paths: {
      assets: "",
      base: "",
    },
  },
};

export default config;

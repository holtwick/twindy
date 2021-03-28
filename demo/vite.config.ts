import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"

// const twindy = resolve(__dirname, "..")
// console.log("twindy", twindy)

// https://vitejs.dev/config/
export default defineConfig({
  base: "/twindy/",
  build: {
    outDir: resolve(__dirname, "../docs/"),
  },
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     twindy,
  //   },
  // },
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // enable config below for localnetwork hosting
  // server: {
  //   host: true,
  // },
});

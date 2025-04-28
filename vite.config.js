import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      external: ["react-chatbot-kit"],
      output: {
        globals: {
          "react-chatbot-kit": "ReactChatbotKit",
        },
      },
    },
  },
});

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  optimizeDeps: {
    include: ['@react-oauth/google']
  },
  plugins: [react()],
  server: {
    port: 3000,  // You can change the port number here
  },
});

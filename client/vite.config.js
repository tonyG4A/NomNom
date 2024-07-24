import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  define: {
    'process.env.VITE_YOUR_VARIABLE': JSON.stringify(process.env.YELP_API_KEY),
  },
});

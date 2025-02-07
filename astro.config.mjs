import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true, // Allow connections from all hosts
    port: 4321  // Default Astro port
  },
  vite: {
    server: {
      strictPort: true,
      // Allow all ngrok-free.app subdomains
      allowedHosts: ['.ngrok-free.app']
    }
  }
});

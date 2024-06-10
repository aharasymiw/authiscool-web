import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// shadcn/ui
import path from "path"

// getting ssh to work locally
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // shadcn/ui
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // getting ssh to work locally
  server: {
    proxy: {
      'https://localhost:5173/api/v1': 'https://localhost:5001/api/v1'
      // '/api/v1': 'http://localhost:5001'
    },
    https: {
      key: fs.readFileSync('./.certs/localhost_key_exp_4_19_25.pem'),
      cert: fs.readFileSync('./.certs/localhost_cert_exp_4_19_25.pem'),
    }
  },
})

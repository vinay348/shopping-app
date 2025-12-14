import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  server:{                                // for proxy , handling cors error
    proxy:{
      "/api":{
        target:"http://localhost:5000",
      }
    }
  }
})

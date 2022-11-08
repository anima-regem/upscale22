import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// for https dev env
// import Mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  // server: { https: true},
  plugins: [react(),
    //Mkcert()
  ]
})

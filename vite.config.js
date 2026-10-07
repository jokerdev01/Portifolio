import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],


  server: {
    port: 3000,       // Muda a porta de 5173 para 3000 (ou o número que quiser)
    host: true,       // Expõe na sua rede local (0.0.0.0) para acessar via celular/IP
    open: true,       // Abre o navegador automaticamente ao rodar o comando
  }

})

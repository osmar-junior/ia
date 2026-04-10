import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Plugin que resolve /algum/caminho/ → /algum/caminho/index.html em dev
// (replica o comportamento padrão do Cloudflare Pages)
const directoryIndex = {
  name: 'directory-index',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const url = req.url?.split('?')[0]
      if (url && url.endsWith('/')) {
        const candidate = path.join(process.cwd(), 'public', url, 'index.html')
        if (fs.existsSync(candidate)) {
          req.url = url + 'index.html'
        }
      }
      next()
    })
  }
}

export default defineConfig({
  plugins: [react(), directoryIndex],
})

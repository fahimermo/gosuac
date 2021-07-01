const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { join } = require('path')
const routes = require('./routes')
const env = require('./env')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    const rootStaticFiles = ['/robots.txt', '/sitemap.xml', '/favicon.png']
    if (pathname === '/sw.js' || pathname.startsWith('/workbox-') || rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const filePath = join(__dirname, 'public', pathname)
      app.serveStatic(req, res, filePath)
    } else {
      handler(req, res, parsedUrl)
    }
  }).listen(env.APP_PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:` + env.APP_PORT)
  })
})

//The custom server is similar to the “next” binary command.
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

/* Mapped a custom route to the existing page "/post". Mapped query params as well. */
  server.get('p/:name', (req, res) => {
    const actualPage = '/post'
    const queryParams = { name: req.params.name }
    app.render(req, res, actualPage, queryParams)
})

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
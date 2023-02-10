const express = require('express')
const path = require('path')

const testApi = require('./api/test/routes')

const app = express()

const SERVER_DIR = path.join(__dirname)
const BUILD_DIR = path.join(SERVER_DIR + '/../build')
const HTML_FILE = path.join(BUILD_DIR + '/index.html')

// Serve react stuff to front end
app.use(express.static(BUILD_DIR))
app.get('/page/*', (req, res) => {
    res.sendFile(HTML_FILE)
})

app.use('/testRoute', testApi)



const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}...`)
})
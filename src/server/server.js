const express = require('express')
const path = require('path')

const app = express()

const SERVER_DIR = path.join(__dirname)
const BUILD_DIR = path.join(SERVER_DIR + '/../build')
const HTML_FILE = path.join(BUILD_DIR + '/index.html')

app.use(express.static(BUILD_DIR))

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})



const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}...`)
})
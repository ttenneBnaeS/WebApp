const express = require('express')
const router = express.Router()

router.get("/test", (req, res) => {
    res.send({data: "Here is some data"})
})

router.post("/test", (req, res) => {
    res.send({data: "Data created"})
})

router.put("/test", (req, res) => {
    res.send({data: "Data updated"})
})

router.delete("/test", (req, res) => {
    res.send({data: "Data deleted"})
})

module.exports = router
const express = require('express')
const path = require("path");
const app = express()
const port = 4000

app.use(express.static( path.resolve(__dirname, 'public')))
app.listen(port, () => {
    console.log(` app listening on port ${port}`)
})

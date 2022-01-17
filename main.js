const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Hello World! I am GREEN.')
})

app.listen(port,"0.0.0.0", () => {
    console.log(`DevOps Demo App Running. Visit: http://localhost:${port} is running locally, or http://[ server IP]:${port} if on a server.`)
})

const express = require('express')
const port = 8080
const app = express()

app.set('port', port)

app.use(express.static(__dirname + '/build'))

app.get('*', (req, res) => {
  console.log('Serving ', req.url)
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(port, () => console.log(`http://localhost:${port}`))

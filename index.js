const express = require('express')
const app = express()
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('JP-Deploy')
})

app.listen(port, () => {
  console.log(`Servidor web escuchando en localhost:${port}`)
})
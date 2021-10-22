const express = require('express')
const routerApi = require('./routes')
const cors = require('cors')

const app = express()
const port = 3000

const { logErrors, errorHandler } = require('./middlewares/error.handler')

app.use(express.json())

const whitelist = ['http://localhost:5500', 'https://myapp.co']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('No he permitido'))
    }
  }
}
app.use(cors(options))

app.get('/', (req, res) => {
  res.send('Hola mi server en express')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta')
})

routerApi(app)

app.use(logErrors)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Mi port ' + port)
})

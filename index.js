const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola mi server en express')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta')
})

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000
  })
})

app.get('/categories', (req, res) => {
  res.json([
    {
      name: 'Home',
      apartment: 'Beds'
    },
    {
      name: 'Tech',
      apartment: 'PC'
    }
  ])
})

app.get('/categories/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'Tech',
    apartment: 'PC'
  })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId} = req.params
  res.json({
    categoryId,
    productId
  })
})

app.get('/people', (req, res) => {
  res.json([
    {
      name: 'Joaquin',
      age: 30,
      email: 'joaquin@user.com'
    },
    {
      name: 'Jones',
      age: 26,
      email: 'jones@user.com'
    }
  ])
})

app.get('/people/:peopleId', (req, res) => {
  const { peopleId } = req.params
  res.json({
    peopleId
  })
})

app.listen(port, () => {
  console.log('Mi port ' + port)
})

const express = require('express')
const faker = require('faker')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola mi server en express')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta')
})

app.get('/products', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products)
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

app.get('/categories/filter', (req, res) => {
  res.send('soy un filter')
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

app.get('/users', (req, res) => {
  const { limit, offset } = req.query
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parametros')
  }
})

app.listen(port, () => {
  console.log('Mi port ' + port)
})

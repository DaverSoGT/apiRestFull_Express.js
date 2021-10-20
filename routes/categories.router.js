const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'Tech',
    apartment: 'PC'
  })
})

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId} = req.params
  res.json({
    categoryId,
    productId
  })
})


module.exports = router

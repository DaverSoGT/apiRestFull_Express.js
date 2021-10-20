const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
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

router.get('/:peopleId', (req, res) => {
  const { peopleId } = req.params
  res.json({
    peopleId,
    name: 'David',
    age: 23,
    role: 'Software Engineer'
  })
})

module.exports = router

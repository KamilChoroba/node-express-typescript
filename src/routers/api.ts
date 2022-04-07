import express from 'express'

const router = express.Router()

router.post('/search', function (req, res) {
  if (!req.body.keyword) {
    res.status(400).send('Missing keyword in body of request')
  } else {
    console.log(`POST search for ${req.body.keyword}`)
    res.json({
      search: req.body.keyword,
      results: [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }],
    })
  }
})

router.get('/product/:id/details', function (req, res) {
  let detailedProduct = undefined
  console.log(`GET /product/${req.params.id}/details`)
  switch (req.params.id) {
    case '1':
      detailedProduct = {
        id: '1',
        title: 'MacBook',
        category: 'computer',
        price: 1099.99,
      }
      break
    case '2':
      detailedProduct = {
        id: '2',
        title: 'NFS',
        category: 'video game',
        price: 59.99,
      }
      break
    case '3':
      detailedProduct = {
        id: '3',
        title: 'Dyson',
        category: 'vacuum cleaner',
        price: 199.99,
      }
      break
    case '4':
      detailedProduct = {
        id: '4',
        title: 'Lego',
        category: 'toys',
        price: 39.99,
      }
      break
    default:
      detailedProduct = undefined
  }
  res.json({ data: detailedProduct })
})

router.post('/cart', function (req, res) {
  if (!req.body.productId) {
    res.status(400).send('Missing productId in body of request')
  } else {
    console.log(`POST /cart productId=${req.body.productId}`)
    res.send(`Added productId=${req.body.productId} to shopping cart`)
  }
})

export default router

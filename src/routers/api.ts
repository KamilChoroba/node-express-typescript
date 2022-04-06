import express from 'express'

const router = express.Router()

router.get('/', function (_req, res) {
  res.send('/cars')
})

router.get('/cars', function (_req, res) {
  res.send('cars')
})

router.get('/bikes', function (_req, res) {
  res.send('bikes')
})

export default router

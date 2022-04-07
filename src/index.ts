import express from 'express'
import api from './routers/api'

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Welcome to express! 🚀')
})

app.use('/api', api)

app.listen(3000, () => console.log('Server ready, call http://localhost:3000/'))

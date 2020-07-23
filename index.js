const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/sneakers', db.getSneakers)
app.get('/sneakers/:id', db.getSneakersById)
app.post('/sneakers', db.createSneakers)
app.put('/sneakers/:id', db.updateSneakers)
app.delete('/sneakers/:id', db.deleteSneakers)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


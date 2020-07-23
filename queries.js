const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'database-1.cadnptdrhmm0.us-east-1.rds.amazonaws.com',
  database: 'lakai',
  password: 'password',
  port: 5432,
})

const getSneakers = (request, response) => {
    pool.query('SELECT * FROM sneakers ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}
  
const getSneakersById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM sneakers WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createSneakers = (request, response) => {
  const { name, size, image, color} = request.body

  pool.query('INSERT INTO sneakers (name, size, image, color) VALUES ($1, $2, $3, $4)', [name, size, image, color], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`sneakers added: ${first}`)
  })
}

const updateSneakers = (request, response) => {
   const id = parseInt(request.params.id)
  const { name, size, image, color } = request.body

  pool.query(
    'UPDATE sneakers SET name = $1, size = $2, image = $3, color = $4 WHERE id = $5',
    [name, size, image, color, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`sneakers modified with ID: ${id}`)
    }
  )
}

const deleteSneakers = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM sneakers WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`sneakers deleted with ID: ${id}`)
  })
}

  module.exports = {
    getSneakers,
    getSneakersById,
    createSneakers,
    updateSneakers,
    deleteSneakers,
  }
  


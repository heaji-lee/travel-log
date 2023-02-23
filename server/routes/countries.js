const express = require('express')
const db = require('../db/countries')
const router = express.Router()

//POST /api/v1/countries/
router.post('/', (req, res) => {
  const countryName = req.body

  db.addCountry(countryName.country)
    .then(() => db.getCountries())
    .then((countries) => res.json(countries))
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//GET /api/v1/countries
router.get('/', (req, res) => {
  db.getCountries()
    .then((countries) => {
      res.json(countries)
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//DELETE /api/v1/countries/:countryId
router.delete('/:id', (req, res) => {
  const countryId = Number(req.params.id)
  db.deleteCountry(countryId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

module.exports = router

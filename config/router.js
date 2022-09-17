const express = require('express')
const routes = express.Router()




let db = [
  {'1' : {Nome: 'Rogerio', Idade: '20'} },
  {'2' : {Nome: 'Jennyfer', Idade: '16'} },
  {'3' : {Nome: 'Railly', Idade: '10'} }
]



routes.get('/', function(req, res) {
  return res.json(db)
})



routes.post('/add', function(req, res) {
  const body = req.body

  // Se o body for vasio vai ser retornado erro na API
  if (!body) {
    return res.status(400).end()
  }
  

  // O que for adicionado no body sera adiconado na API
  db.push(body)
  return res.json(body)
})

routes.delete('/:id', function(req, res) {
  const id = req.params.id

  let newDB = db.filter(item => {
    if (!item[id]) 
    return item
  })

  db = newDB

  return res.send(newDB)
})

module.exports = routes

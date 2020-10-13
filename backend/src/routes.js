const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const { response } = require('express')
const { request } = require('http')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/users', OngController.index )
routes.post('/users', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id',IncidentController.delete )



module.exports = routes
import express from 'express'
import EquipmentsRoutes from './controllers/equipments/router'
import StatesRoutes from './controllers/states/router'

const app = express()

app.use(express.json())
app.use('/equipments', EquipmentsRoutes)
app.use('/states', StatesRoutes)

module.exports = app

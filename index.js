import express from 'express'
import mongoose from 'mongoose'

const app = express()

mongoose.connect('mongodb://admin:admin@localhost:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('aqui va el codigo para listar elementos..')
})

app.listen(3000, () => console.log('listening...'))

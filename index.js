import express from 'express'
import mongoose from 'mongoose'

const Electrodomestico = mongoose.model('Electrodomestico', new mongoose.Schema({
  nombre: String,
  marca: String,
}))

const app = express()

//mongoose.connect('mongodb://admin:admin@localhost:27017/miapp?authSource=admin')
mongoose.connect('mongodb://admin:admin@container-mongo:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando... Electrodomesticos...')
  const Electrodomesticos = await Electrodomestico.find();
  return res.send(Electrodomesticos)
})
app.get('/crear', async (_req, res) => {
  console.log('creando registros quemados...')
  await Electrodomestico.create({ nombre: 'Televisor', marca: 'LG' })
  await Electrodomestico.create({ nombre: 'Microhondas', marca: 'LG' })
  await Electrodomestico.create({ nombre: 'Horno', marca: 'LG' })
  await Electrodomestico.create({ nombre: 'Lavadora', marca: 'LG' })
  await Electrodomestico.create({ nombre: 'Estufa', marca: 'LG' })
  await Electrodomestico.create({ nombre: 'Freidora', marca: 'LG' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))

import express from 'express'
import mongoose from 'mongoose'

const Electrodomestico = mongoose.model('Electrodomestico', new mongoose.Schema({
  nombre: String,
  marca: String,
}))

const app = express()

mongoose.connect('mongodb://admin:admin@localhost:27017/miapp?authSource=admin')

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

app.get('/eliminar/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await Electrodomestico.findByIdAndDelete(id);
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto' });
  }
});

app.listen(3000, () => console.log('listening...'))

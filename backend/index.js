import express from 'express';
import mongoose from 'mongoose';
import applianceController from './src/controllers/applianceController.js';
import path from 'path';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://admin:admin@container-database:27017/app?authSource=admin');
//mongoose.connect('mongodb://admin:admin@127.0.0.1:27017/app?authSource=admin');

// Configuración para servir archivos estáticos desde la carpeta 'uploads'
const uploadsDirPath = path.join(process.cwd(), 'uploads'); 
app.use('/uploads', express.static(uploadsDirPath));

// Routes
app.get('/appliances', applianceController.listAll);
app.post('/appliances', applianceController.create);
app.put('/appliances/:id', applianceController.update);
app.delete('/appliances/:id', applianceController.delete);

app.listen(3000, () => console.log('Server listening on port 3000'));
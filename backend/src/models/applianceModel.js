import mongoose from 'mongoose';

const applianceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String },
  image: { type: String },      
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 }
});

const Appliance = mongoose.model('Appliance', applianceSchema);

export default Appliance;

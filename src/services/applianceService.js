import Appliance from '../models/applianceModel.js';

class ApplianceService {
  async listAll() {
    return await Appliance.find();
  }

  async create(data) {
    const newAppliance = new Appliance(data);
    return await newAppliance.save();
  }

  async delete(id) {
    return await Appliance.findByIdAndDelete(id);
  }

  async update(id, updatedData) {
    const updatedAppliance = await Appliance.findByIdAndUpdate(id, updatedData, { new: true });
    return updatedAppliance;
  }

  
}

export default new ApplianceService();

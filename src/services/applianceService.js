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
}

export default new ApplianceService();

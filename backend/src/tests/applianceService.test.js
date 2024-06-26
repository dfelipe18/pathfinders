import applianceService from '../services/applianceService.js';
import Appliance from '../models/applianceModel.js';
import { jest } from '@jest/globals';

jest.mock('../models/applianceModel.js');

describe('ApplianceService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should list all appliances', async () => {
    const mockAppliances = [
      { _id: '1', name: 'TV', brand: 'Samsung' },
      { _id: '2', name: 'Refrigerator', brand: 'LG' }
    ];
    Appliance.find.mockResolvedValue(mockAppliances);

    const appliances = await applianceService.listAll();

    expect(Appliance.find).toHaveBeenCalledTimes(1);
    expect(appliances).toEqual(mockAppliances);
  });

  it('should create a new appliance', async () => {
    const applianceData = { name: 'Microwave', brand: 'Panasonic', price: 200 };
    const mockAppliance = { _id: '3', ...applianceData };
    Appliance.prototype.save.mockResolvedValue(mockAppliance);

    const newAppliance = await applianceService.create(applianceData);

    expect(Appliance).toHaveBeenCalledWith(applianceData);
    expect(newAppliance).toEqual(mockAppliance);
  });

  it('should delete an appliance', async () => {
    const applianceId = '1';
    const applianceIdError = '1';
    Appliance.findByIdAndDelete.mockResolvedValue({ _id: applianceId });

    const deletedAppliance = await applianceService.delete(applianceId);

    expect(Appliance.findByIdAndDelete).toHaveBeenCalledWith(applianceIdError);
    expect(deletedAppliance).toEqual({ _id: applianceIdError });
  });
  it('should update an appliance', async () => {
    const applianceId = '1';
    const updatedData = { name: 'New Name', price: 350 };
    const mockUpdatedAppliance = { _id: applianceId, ...updatedData };
  
    Appliance.findByIdAndUpdate.mockResolvedValue(mockUpdatedAppliance);
  
    const updatedAppliance = await applianceService.update(applianceId, updatedData);
  
    expect(Appliance.findByIdAndUpdate).toHaveBeenCalledWith(applianceId, updatedData, { new: true });
    expect(updatedAppliance).toEqual(mockUpdatedAppliance);
  });
});
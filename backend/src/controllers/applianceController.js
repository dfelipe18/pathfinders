import applianceService from '../services/applianceService.js';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    debugger;
    cb(null, '/home/app/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

class ApplianceController {

    async listAll(req, res) {
        try {
          const appliances = await applianceService.listAll();
          const appliancesWithImageUrls = appliances.map(appliance => {
            return {
              ...appliance._doc,
              imageUrl: appliance.image ? `${req.protocol}://${req.get('host')}/uploads/${appliance.image}` : null
            };
          });
          res.json(appliancesWithImageUrls);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
    }

    async create(req, res) {
        upload.single('image')(req, res, async (err) => {

        console.log("Archivo recibido:", req.file);

          if (err) {
              console.error("Error al subir el archivo:", err);
              return res.status(500).json({ message: "Error al subir el archivo" });
          }
          try {
              const newApplianceData = {
              ...req.body,
              image: req.file ? req.file.filename : null
              };

              const newAppliance = await applianceService.create(newApplianceData);
              res.status(201).json(newAppliance);
          } catch (error) {
              console.error("Error al guardar el electrodoméstico:", error);
              res.status(500).json({ message: error.message });
          }
        });
      }

  async update(req, res) {
    try {
      const updatedAppliance = await applianceService.update(req.params.id, req.body);
      if (!updatedAppliance) {
        return res.status(404).json({ message: 'Appliance not found' });
      }
      res.json(updatedAppliance);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deletedAppliance = await applianceService.delete(req.params.id);
      if (!deletedAppliance) {
        return res.status(404).json({ message: 'Appliance not found' });
      }
      res.json({ message: 'Appliance deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new ApplianceController();

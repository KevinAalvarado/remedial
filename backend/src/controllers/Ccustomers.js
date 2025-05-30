import customerModel from "../models/Customers.js";
import { v2 as cloudinary } from "cloudinary";
 
import { config } from "../config.js";
 
//1- En el controlador, siempre se tiende a configurar
//Cloudinary primero
 
cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.cloudinary_api_key,
  api_secret: config.cloudinary.cloudinary_api_secret,
});
 
//Array de funciones vacio
const customerController = {};
 
customerController.getAllCustomers = async (req, res) => {
  const customers = await customerModel.find();
  res.json(customers);
};
 
//INSERT
customerController.insertCustomers = async (req, res) => {
  const { fullName, email, password, age, countryOfResidence } = req.body;
  let imageURL = "";
 
  //subir la imagen a Cloudinary
  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "public",
      allowed_formats: ["jpg", "png", "jpeg"],
    });
    imageURL = result.secure_url;
  }
  //Guardar el registro en la base de datos
  const newCustomer = new customerModel({ fullName, email, password, age, countryOfResidence, imageCustomer: imageURL });
  newCustomer.save();
 
  res.json({ message: "Customer saved" });
};
 
//UPDATE
customerController.putCustomer = async (req, res) => {
    const { fullName, email, password, age, countryOfResidence } = req.body;
    let imageURL = "";
 
    //subir la imagen a Cloudinary
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "public",
        allowed_formats: ["jpg", "png", "jpeg"],
      });
      imageURL = result.secure_url;
    }
    //Actualizar la base de datos
    await customerModel.findByIdAndUpdate(req.params.id, { fullName, email, password, age, countryOfResidence, imageCustomer: imageURL }, {new: true});
 
    res.json({ message: "provider actualized" });
  };
 
//DELETE
customerController.deleteCustomer = async (req, res) => {
    const deletedCustomer = await customerModel.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json({ message: "Customer deleted" });
  };
 
export default customerController;
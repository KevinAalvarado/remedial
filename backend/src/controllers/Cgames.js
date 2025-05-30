import gamesModel from "../models/Games.js";
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
const gamesController = {};
 
gamesController.getAllGames = async (req, res) => {
  const games = await gamesModel.find();
  res.json(games);
};
 
//INSERT
gamesController.insertGames = async (req, res) => {
  const { name, category, maximunBet, minimumBet } = req.body;
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
  const newGame = new gamesModel({ name, category, maximunBet, minimumBet, imageGame: imageURL });
  newGame.save();
 
  res.json({ message: "Game saved" });
};
 
//UPDATE
gamesController.putGame = async (req, res) => {
    const { name, category, maximunBet, minimumBet } = req.body;
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
    await gamesModel.findByIdAndUpdate(req.params.id, { name, category, maximunBet, minimumBet, imageGame: imageURL }, {new: true});
 
    res.json({ message: "Game actualized" });
  };
 
//DELETE
gamesController.deleteGame = async (req, res) => {
    const deletedGame = await gamesModel.findByIdAndDelete(req.params.id);
    if (!deletedGame) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.json({ message: "Game deleted" });
  };
 
export default gamesController;
 
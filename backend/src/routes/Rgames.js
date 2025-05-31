import express from "express";
import multer from "multer";

const router = express.Router();
import gamesController from "../controllers/Cgames.js";

// Router() nos ayuda a colocar los metodos
// que tendra mi ruta

//configurar una carpeta en local que guarde el registro de las imágenes subidas
const upload = multer({dest: "public/"})

router.route("/")
    .get(gamesController.getAllGames)
    .post(upload.single("image"), gamesController.insertGames);

router.route("/:id")
    .put(upload.single("image"), gamesController.putGame)
    .delete(gamesController.deleteGame);

export default router;
import express from "express";

const router = express.Router();
import gamesController from "../controllers/Cgames.js";

// Router() nos ayuda a colocar los metodos
// que tendra mi ruta

router.route("/")
    .get(gamesController.getGames)
    .post(gamesController    );

router.route("/:id")
    .get(gamesController.getGame)
    .put(gamesController.updateGames)
    .delete(gamesController.deleteGames);

export default router;
import express from "express";
import multer from "multer";

const router = express.Router();
import customerController from "../controllers/Ccustomers.js";

// Router() nos ayuda a colocar los metodos
// que tendra mi ruta

//configurar una carpeta en local que guarde el registro de las imágenes subidas
const upload = multer({dest: "public/"})

router.route("/")
    .get(customerController.getAllCustomers)
    .post(upload.single("image"), customerController.insertCustomers);

router.route("/:id")
    .put(upload.single("image"), customerController.putCustomer)
    .delete(customerController.deleteCustomer);

export default router;
import express from "express";

const router = express.Router();
import customerController from "../controllers/Ccustomers.js";

// Router() nos ayuda a colocar los metodos
// que tendra mi ruta

router.route("/")
    .get(customerController.getAllCustomers)
    .post(customerController.insertCustomers);

router.route("/:id")
    .put(customerController.putCustomer)
    .delete(customerController.deleteCustomer);

export default router;
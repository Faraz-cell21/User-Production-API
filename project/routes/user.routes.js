import { Router } from "express";
import { getAllUsers, getOneUser, createUser, putUser, deleteUser } from "../controllers/user.controllers.js";
import { createUserValidator, updateUserValidator } from "../validators/user.validators.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUserValidator, validate, createUser);
router.put("/:id", updateUserValidator, validate, putUser);

export default router;
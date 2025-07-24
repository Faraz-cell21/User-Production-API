import { Router } from "express";
import { getAllUsers, getOneUser, createUser, putUser, deleteUser } from "../controllers/user.controllers.js";
import { createUserValidator, updateUserValidator } from "../validators/user.validators.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

export default router;
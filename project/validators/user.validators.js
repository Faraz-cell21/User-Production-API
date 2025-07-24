import {body} from "express-validator";

export const createUserValidator = [
    body("name")
        .notEmpty().withMessage("Name is required")
        .isLength({min: 3}).withMessage("Name must be at least 3 characters long"),
    body("email")
        .notEmpty().withMessage("Email is required"),
    body(age)
        .notEmpty().withMessage("Age must not be empty")
        .isLength({min: 1}).withMessage("Age must be greater than 0"),
];

export const updateUserValidator = [
    body("name")
        .optional()
        .isLength({min: 3}).withMessage("Name must be at least 3 characters long"),
    body("email")
        .optional(),
    body(age)
        .optional()
        .isLength({min: 1}).withMessage("Age must be greater than 0"),
];
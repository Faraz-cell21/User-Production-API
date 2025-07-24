import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";
import mongoose from "mongoose";

// GET all tasks
export const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json({success: true, count: users.length, users});
});

// GET one user
export const getOneUser = asyncHandler(async (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        throw new ErrorResponse("Invalid User ID", 400);
    };
    const user = await User.findById(req.params.id);
    if(!user) {
        throw new ErrorResponse("User not found", 400);
    };
    res.status(200).json({success: true, user});
});

// POST create user
export const createUser = asyncHandler(async (req, res) => {
    const { name, email, age } = req.body;
    const user = await User.create({ name, email, age });
    res.status(201).json({ success: true, message: "User created", user})
})
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/day6-MERN");
        console.log("Database Connected!")
    } catch (err) {
        console.log("Error connecting Database: ", err);
        process.exit(1)
    }
};

export default connectDB;
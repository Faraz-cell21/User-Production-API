import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// User Routes
app.use("/api/user/", userRoutes);

// Error Handler (after routes)
app.use(errorMiddleware);

// Start Server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        })
    } catch (err) {
        console.log("Server Failed to start: ", err)
    }
}

startServer();
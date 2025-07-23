export const errorMiddleware = (err, req, res, next) => {
    console.log("Error: ", err.message);

    const status = err.statusCode || 500;
    res.status(status).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
};
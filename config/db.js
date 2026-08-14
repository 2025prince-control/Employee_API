const mongoose = require('mongoose');

const connectDB = () => {
    mongoose
        .connect("mongodb+srv://2025princey_db_user:princey_py_04@cluster0.a7hfyd2.mongodb.net/?appName=Cluster0")
        .then(() => {
            const db = mongoose.connection;

            db.on("connected", () => {
                console.log("Database connected successfully");
            });

            db.on("disconnected", () => {
                console.log("mongodb disconnected");
            });

            db.on("error", (err) => {
                console.log("Error in database connection : ", err);
            });
        })
        .catch((err) => {
            console.error("Failed to connect to MongoDB:", err);
        });
};

module.exports = connectDB;

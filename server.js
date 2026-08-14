const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors')
const employeeRouter = require('./router/employeeRouter');

const app=express();
app.use(cors());
connectDB();

app.use(express.json());
app.use("/employees", employeeRouter);

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});

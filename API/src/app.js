const { log } = require("console")
const express = require("express")
const { mongo } = require("mongoose")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const mongoose = require("mongoose")

mongoose.connect(process.env.DBURL).then(() => {
    console.log("Db connected");
}).catch(err => {
    console.log(err);
})

app.get("/",(req,resp)=>{
    resp.send("NODE API - for ECOMMERECE WEBSITE")
})

app.listen(PORT, () => {
    console.log(`server is runnong on port ${PORT}`);
})
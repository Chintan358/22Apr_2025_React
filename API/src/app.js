const { log } = require("console")
const express = require("express")
const { mongo } = require("mongoose")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const mongoose = require("mongoose")
app.use(express.json())
// https://two2apr-2025-react.onrender.com/
mongoose.connect(process.env.DBURL).then(() => {
    console.log("Db connected");
}).catch(err => {
    console.log(err);
})


app.use("/users", require("../router/userrouter"))
app.use("/categories", require("../router/categoryrouter"))


app.get("/", (req, resp) => {
    resp.send("NODE API - for ECOMMERECE WEBSITE")
})

app.listen(PORT, () => {
    console.log(`server is runnong on port ${PORT}`);
})
const router = require("express").Router()
const multer = require('multer');
const Product = require("../model/products")
const path = require("path");
const { log } = require("console");
const { route } = require("./categoryrouter");
const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary");


cloudinary.config({
    cloud_name: process.env.CNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "img", // Cloudinary folder name
        allowed_formats: ["jpg", "png", "jpeg", "webp"]
    }
});

const upload = multer({ storage });

router.post("/", upload.single('file'), async (req, resp) => {


    req.body.image_url = req.file.path
    try {
        const product = new Product(req.body)
        const savedProduct = await product.save()
        resp.status(201).send(savedProduct)

    } catch (error) {
        resp.send(error)
    }
})

router.put("/:id", upload.single('file'), async (req, resp) => {


    const id = req.params.id
    req.body.image_url = req.file.path
    try {

        const updatedProduct = await Product.findByIdAndUpdate(id, req.body)
        resp.status(201).send(updatedProduct)

    } catch (error) {
        resp.send(error)
    }
})



router.get("/", async (req, resp) => {
    try {
        const products = await Product.find()
        // products.map(ele => {
        //     ele.image_url = process.env.IMGURL + "/products/image/" + ele.image_url
        // })
        resp.status(200).send(products)
    } catch (error) {

    }
})



module.exports = router
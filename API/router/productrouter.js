const router = require("express").Router()
const multer = require('multer');
const Product = require("../model/products")
const path = require("path");
const { log } = require("console");
const { route } = require("./categoryrouter");
const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const auth = require("../middleware/auth");


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

router.post("/", auth, upload.single('file'), async (req, resp) => {

    if (req.user.role != 'admin') {
        resp.send("access denied")
        return
    }

    req.body.image_url = req.file.path
    try {
        const product = new Product(req.body)
        const savedProduct = await product.save()
        resp.status(201).send(savedProduct)

    } catch (error) {
        resp.send(error)
    }
})

router.put("/:id", auth, upload.single('file'), async (req, resp) => {

    if (req.user.role != 'admin') {
        resp.send("access denied")
        return
    }
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
        const products = await Product.find().populate("category")
        // products.map(ele => {
        //     ele.image_url = process.env.IMGURL + "/products/image/" + ele.image_url
        // })
        resp.status(200).send(products)
    } catch (error) {

    }
})

router.get("/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const products = await Product.findOne({ _id: id }).populate("category")
        // products.map(ele => {
        //     ele.image_url = process.env.IMGURL + "/products/image/" + ele.image_url
        // })
        resp.status(200).send(products)
    } catch (error) {

    }
})



router.delete("/:id", auth, async (req, resp) => {

    if (req.user.role != 'admin') {
        resp.send("access denied")
        return
    }
    const id = req.params.id
    try {
        const products = await Product.findByIdAndDelete(id)
        // products.map(ele => {
        //     ele.image_url = process.env.IMGURL + "/products/image/" + ele.image_url
        // })
        resp.status(200).send(products)
    } catch (error) {

    }
})


router.get("/category/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const products = await Product.find ({ category: id }).populate("category")
        // products.map(ele => {
        //     ele.image_url = process.env.IMGURL + "/products/image/" + ele.image_url
        // })
        resp.status(200).send(products)
    } catch (error) {

    }
})






module.exports = router
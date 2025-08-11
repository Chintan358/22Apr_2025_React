const router = require("express").Router()
const multer = require('multer');
const Product = require("../model/products")
const path = require("path");
const { log } = require("console");
const { route } = require("./categoryrouter");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './img'); // Images will be saved in the 'img' directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename with original extension
    }
});


const upload = multer({ storage: storage });

router.post("/", upload.single('file'), async (req, resp) => {

    req.body.image_url = req.file.filename
    try {
        const product = new Product(req.body)
        const savedProduct = await product.save()
        resp.status(201).send(savedProduct)

    } catch (error) {
        resp.send(error)
    }
})


router.get('/image/:name', (req, res) => {
    const imageName = req.params.name;
    const mpath = path.resolve(__dirname, '..')
    console.log("test : " + mpath);

    const imagePath = path.join(mpath, 'img', imageName);

    res.sendFile(imagePath, err => {
        if (err) {
            console.log(err);

            res.status(404).send('Image not found');
        }
    });
});


router.get("/", async (req, resp) => {
    try {
        const products = await Product.find()
        products.map(ele => {
            ele.image_url = process.env.IMGURL + "/products/image/" + ele.image_url
        })
        resp.status(200).send(products)
    } catch (error) {

    }
})

module.exports = router
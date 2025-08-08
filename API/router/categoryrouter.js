const router = require("express").Router()
const auth = require("../middleware/auth")
const Category = require("../model/categories")

router.post("/", auth, async (req, resp) => {

    if (req.user.role != 'admin') {
        resp.send("access denied")
        return
    }
    try {
        const category = new Category(req.body)
        const savedCategory = await category.save()
        resp.status(201).send(savedCategory)
    } catch (error) {
        resp.send(error)
    }
})


router.get("/", async (req, resp) => {
    try {
        const categories = await Category.find()
        resp.status(200).send(categories)
    } catch (error) {
        resp.send(error)
    }
})


router.get("/:id", async (req, resp) => {

    const id = req.params.id
    try {
        const categories = await Category.findOne({ _id: id })
        resp.status(200).send(categories)
    } catch (error) {
        resp.send(error)
    }
})


router.put("/:id", auth, async (req, resp) => {
    const id = req.params.id
    if (req.user.role != 'admin') {
        resp.send("access denied")
        return
    }
    try {
        const categories = await Category.findByIdAndUpdate(id, req.body)
        resp.status(200).send(categories)
    } catch (error) {
        resp.send(error)
    }
})



router.delete("/:id", auth, async (req, resp) => {
    const id = req.params.id
    if (req.user.role != 'admin') {
        resp.send("access denied")
        return
    }
    try {
        const categories = await Category.findByIdAndDelete(id)
        resp.status(200).send(categories)
    } catch (error) {
        resp.send(error)
    }
})













module.exports = router




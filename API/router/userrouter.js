const express = require("express")
const router = express.Router()
const User = require("../model/users")

router.post("/", async (req, resp) => {
    try {
        const user = new User(req.body)
        const createduser = await user.save()
        resp.status(201).send(createduser)
    } catch (error) {
        resp.send(error)
    }
})


module.exports = router
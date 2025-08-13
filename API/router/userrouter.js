const express = require("express")
const router = express.Router()
const User = require("../model/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")

router.post("/", async (req, resp) => {
    try {
        const user = new User(req.body)
        const createduser = await user.save()
        resp.status(201).send(createduser)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/", auth, async (req, resp) => {

    const role = req.user.role
    if (role != 'admin') {
        resp.status(403).send("Access Denied")
        return
    }
    try {
        const users = await User.find()
        resp.status(200).send(users)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/:id", auth, async (req, resp) => {

    const _id = req.params.id
    if (req.user.role == 'user') {
        if (req.user._id != _id) {
            resp.status(403).send("Access Denied")
            return
        }
    }
    try {
        const users = await User.findOne({ _id: _id })
        resp.status(200).send(users)
    } catch (error) {
        resp.send(error)
    }
})


router.put("/:id", auth, async (req, resp) => {

    const _id = req.params.id

    try {

        if (req.user.role == 'user') {
            if (req.user._id == _id) {

                const users = await User.findByIdAndUpdate(_id, req.body)
                resp.status(200).send(users)
                return

            }
            else {
                resp.status(403).send("Access Denied")
                return
            }
        }

    } catch (error) {
        resp.send(error)
    }
})


router.delete("/:id", auth, async (req, resp) => {

    const _id = req.params.id
    if (req.user.role == 'user') {
        if (req.user._id != _id) {
            resp.status(403).send("Access Denied")
            return
        }
    }
    try {
        const users = await User.findByIdAndDelete(_id)
        resp.status(200).send(users)
    } catch (error) {
        resp.send(error)
    }
})


router.post("/login", async (req, resp) => {

    try {

        const { email, password } = req.body
        const user = await User.findOne({ "email": email })
        if (user) {

            const ischeck = await bcrypt.compare(password, user.password)
            if (ischeck) {

                const token = await jwt.sign({ _id: user._id, role: user.role }, process.env.SKEY)
                const data = {
                    "auth-token": token
                }
                resp.send(data)
            }
            else {
                resp.send("Invalid credentials")
            }
        }
        else {
            resp.send("Invalid credentials")
        }


    } catch (error) {
        console.log(error);

    }

})


module.exports = router
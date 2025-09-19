const express = require("express")
const router = express.Router()
const User = require("../model/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")
const nodemailer = require("nodemailer")

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
                    "authtoken": token,
                    "role": user.role
                }
                resp.send(data)
            }
            else {



                // resp.send({ "error": "Invalid credentials" })
                resp.status(401).send({ "error": "Invalid credentials" })

            }
        }
        else {

            // resp.send({ "error": "Invalid credentials" })
            resp.status(401).send({ "error": "Invalid credentials" })

        }


    } catch (error) {
        console.log(error);

    }

})


router.post("/forgot", async (req, resp) => {

    const email = req.body.email


    try {

        const user = await User.findOne({ email: email })
        if (user) {

            const token = await jwt.sign({ id: user._id }, process.env.FSKEY)

            const link = `http://localhost:5173/changepass?token=${token}`

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'chintan.tops@gmail.com',
                    pass: 'qdvx hcds spls afuk'
                }
            });




            let mailOptions = {
                from: 'chintan.tops@gmail.com',
                to: user.email,
                subject: 'Password Reset Link',
                html: `Click on this link ${link} to reset your passwod`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });


            resp.status(200).send({ "message": "link sent on mail" })

        }
        else {
            resp.status(404).send({ "message": "User not exist" })
        }

    } catch (error) {
        console.log(error);

        resp.status(404).send({ "message": "User not exist" })
    }

})



module.exports = router
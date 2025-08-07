const jwt = require("jsonwebtoken")
const User = require("../model/users")

const auth = async (req, resp, next) => {

    try {

        const token = req.header('auth-token')
        const Verified = jwt.verify(token, process.env.SKEY)

        if (Verified) {

            req.user = await User.findOne({ _id: Verified._id })
           
            next()
        }
        else {
            resp.status(401).send("Invalid Token !!!!")
        }


    } catch (error) {
        resp.status(401).send("something went wrong !!!")
    }

}

module.exports = auth
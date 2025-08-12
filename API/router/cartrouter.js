const router = require("express").Router()
const Cart = require("../model/carts")
const auth = require('../middleware/auth')

router.post("/:pid", auth, async (req, resp) => {
    const pid = req.params.pid
    const user = req.user
    try {

        const isExist = await Cart.findOne({ user: user._id, product: pid })
        if (isExist) {
            let qty = isExist.quantity
            const updatedCart = await Cart.findByIdAndUpdate(isExist._id, { quantity: qty + 1 })
            resp.status(201).send(updatedCart)

        }
        else {
            const cart = new Cart({ user: user, product: pid })
            const savedCart = await cart.save()
            resp.status(201).send(savedCart)
        }


    } catch (error) {
        resp.send(error)
    }
})

router.get("/", auth, async (req, resp) => {

    const user = req.user
    try {
        const cartdata = await Cart.find({ user: user._id }).populate(["user", { path: 'product', populate: { path: 'category' } }])
        resp.status(200).send(cartdata)
    } catch (error) {
        resp.send(error)
    }
})

router.delete("/:id", auth, async (req, resp) => {
    try {
        const Cartdata = await Cart.findOne({ _id: req.params.id })
        console.log(Cartdata.user);
        console.log(req.user._id);

        if (!Cartdata.user.equals(req.user._id)) {
            resp.send("Invalid user")
            return
        }
        const deletedCart = await Cart.findByIdAndDelete(req.params.id)
        resp.status(200).send(deletedCart)

    } catch (error) {
        console.log(error);

        resp.send(error)
    }
})





module.exports = router
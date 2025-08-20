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

router.put("/:id", auth, async (req, resp) => {

    const cartid = req.params.id
    const qty = req.query.qty

    try {

        const cartdata = await Cart.findOne({ _id: cartid, user: req.user._id })
        cartdata.quantity = cartdata.quantity + Number(qty)

        if (cartdata.quantity <= 0) {
            const data = await Cart.findByIdAndDelete(cartid)
            resp.status(200).send("deleted")
        }
        else {
            const updatedCart = await Cart.findByIdAndUpdate(cartid, cartdata)
            resp.status(201).send("Cart updated")
        }


    } catch (error) {
        console.log(error);

    }

})




module.exports = router
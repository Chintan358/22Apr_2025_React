const router = require("express").Router()
const auth = require("../middleware/auth")
const Cart = require("../model/carts")
const Order = require("../model/orders")
const OrderItems = require("../model/orderitems")
const { create } = require("../model/products")

router.post("/create", auth, async (req, resp) => {


    try {
        var total = 0
        const data = req.body
        const user = req.user
        const carts = await Cart.find({ user: user._id }).populate("product")
        carts.map(ele => {
            total += ele.product.price * ele.quantity
        })
        const ord = new Order({ user: user._id, payment_id: data.payid, total_amount: total })
        const savedOrder = await ord.save()

        carts.map(async (ele) => {
            const oi = new OrderItems({ order: savedOrder._id, product: ele.product._id, quantity: ele.quantity, price_at_time: ele.product.price })
            await oi.save()

            await Cart.findByIdAndDelete(ele._id)
        })


        resp.status(201).send({ "success": "Ordered created successfully !!!!" })


    } catch (error) {
        resp.status(400).send({ "error": "Something went wrong !!!" })
    }
})


router.get("/", auth, async (req, resp) => {

    try {
        const user = req.user
        // const order = await Order.find({ user: user._id })
        const order = await Order.aggregate([{ $match: { user: user._id } }, {
            $lookup: {
                from: 'orderitems',
                localField: '_id',
                foreignField: 'order',
                as: 'order_items',
                pipeline: [
                // Nested lookup: fetch product details for each order item
                {
                $lookup: {
                    from: "products", // actual collection name
                    localField: "product",
                    foreignField: "_id",
                    as: "product_details"
                }
                },
                {
                $unwind: "$product_details" // flatten single product object
                }
            ]
            }
        },])

        resp.send(order)

    } catch (error) {

    }
})



module.exports = router
const router = require("express").Router()
const Razorpay = require('razorpay');

router.post("/", async (req, resp) => {

    var instance = new Razorpay({ key_id: 'rzp_test_R8LF6p6eS7swQn', key_secret: 'WsLBNmXfF7C4e9T4vWgZaLeN' })

    var options = {
        amount: Number(req.query.amount) * 100,  // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function (err, order) {
        resp.send(order)
    });
})


module.exports = router

const order = require('../models/orderModel')


module.exports.createOrder = async (req, res) => {
    const userId = req.params.userId
    const newOrder = await order.create({ user: userId, product: req.body.product, price: req.body.price })
    res.json(newOrder)
}

module.exports.getOrders = async (req, res) => {
    const allOrders = await order.find()
    res.json(allOrders)
}

module.exports.getOneOrder = async (req, res) => {
    const orderId = req.params.id
    const oneOrder = await order.findById(orderId)
    res.json(oneOrder)
}
const express = require('express')
const userController = require('../controller/userController')
const productController = require('../controller/productsController')
const orderController = require('../controller/orderController')

const router = express.Router()
router.use(express.json())

router.post('/user/register', userController.register)
router.post('/user/login', userController.login)
router.get('/products', productController.getProducts)
router.post('/products', productController.addProducts)
router.put('/products/:id', productController.updateProduct)
router.delete('/products/:id', productController.deleteProduct)
router.post('/orders/:userId', orderController.createOrder)
router.get('/orders', orderController.getOrders)
router.get('/orders/:id', orderController.getOneOrder)



module.exports = router
const products = require('../models/productModel')

module.exports.getProducts=async(req,res)=>{
    const allProducts=await products.find()
    res.json(allProducts)
}

module.exports.addProducts=async(req,res)=>{
    const newProduct=await products.create(req.body)
    res.json(newProduct)
}

module.exports.updateProduct=async(req,res)=>{
    const Id=req.params.id
    const updateProduct=await products.updateOne({id:Id},{$set:req.body},{new:true})
    res.json(updateProduct)
}

module.exports.deleteProduct=async (req,res)=>{
    const Id =req.params.id
    const dtProduct=await products.deleteOne({id:Id})
    res.json(dtProduct)
}
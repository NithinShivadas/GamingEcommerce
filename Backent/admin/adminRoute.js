const express=require('express')
const routeAdmin=express.Router()

const {getProduct,addProduct,updateProduct,deleteProduct,getProductById}=require('./adminController')

  routeAdmin.get('/',getProduct)
  routeAdmin.post('/addproduct',addProduct)
  routeAdmin.post('/update/:id',updateProduct)
  routeAdmin.delete('/:id',deleteProduct)
  routeAdmin.get('/:id',getProductById)


  module.exports=routeAdmin
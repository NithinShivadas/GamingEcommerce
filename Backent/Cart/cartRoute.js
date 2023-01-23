const express=require('express')
const routeCart=express.Router()

const {AddToCart,getCart,deleteCart}=require('./cartController')

  
  routeCart.post('/addcart',AddToCart)
  routeCart.get('/getcart',getCart)
  routeCart.delete('/:id',deleteCart)
  

  module.exports=routeCart
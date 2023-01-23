const express=require('express')
const routeUser=express.Router()

const {getUser,signupUser,loginUser,removeUser}=require('./userController')

  routeUser.get('/',getUser)
  routeUser.post('/signup',signupUser)
  routeUser.post('/login',loginUser)
  routeUser.delete('/:id',removeUser)

  module.exports=routeUser
const User = require('../user/user');
const Cart=require('./cart')


//--------------------AddToCart-----------------

const AddToCart=async (req,res,next)=>{
    const { productName, Image, Description, Category, Price ,userEmail} = req.body;
    const cart=new Cart({productName, Image, Description, Category, Price,userEmail}) 
    try{
        cart.save()
    }catch{
        console.log(err)
        return res.status(404).json({ message: err });
    }
    return res.status(200).json({ cart });
}

//--------------------GetCart Items------------------
const getCart = async (req, res, next) => {
    let cart;
    try {
      cart = await Cart.find();
    } catch (err) {
      console.log(err);
    }
    if (!cart) {
      return res.status(404).json({ message: "No item Found" });
    }
    return res.status(200).json({ cart });
  };

  //-------------------Delete Cart items-------------
  const deleteCart = async (req, res, next) => {
    const id = req.params.id;
    let cart;
    try {
      cart = await Cart.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!cart) {
      return res.status(404).json({ message: "Unable to Remove" });
    }
    return res
      .status(200)
      .json({ cart, message: "Product Removed from Cart" });
  };
  

  module.exports={AddToCart,getCart,deleteCart}
const Order=require('./order')

const AddToOrder=async (req,res,next)=>{
    const { productName, Image, Description, Category, Price ,userEmail} = req.body;
    const order=new Order({productName, Image, Description, Category, Price,userEmail}) 
    try{
        order.save()
    }catch{
        console.log(err)
        return res.status(404).json({ message: err });
    }
    return res.status(200).json({ order });
}

//--------------------Get Order Items------------------
const getOrder = async (req, res, next) => {
    let order;
    try {
        order = await Order.find();
    } catch (err) {
      console.log(err);
    }
    if (!order) {
      return res.status(404).json({ message: "No item Found" });
    }
    return res.status(200).json({ order });
  };

  //-------------------Cancel Ordered items-------------
  const cancelOrder = async (req, res, next) => {
    const id = req.params.id;
    let order;
    try {
        order = await Order.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!order) {
      return res.status(404).json({ message: "Unable to Cancel" });
    }
    return res
      .status(200)
      .json({ order, message: "Your Order is Cancelled" });
  };
  

  module.exports={AddToOrder,getOrder,cancelOrder}
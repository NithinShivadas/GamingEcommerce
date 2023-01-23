const User = require("./user");

//---------get user------------
const getUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No User Found" });
  }
  return res.status(200).json({ users });
};

//-----------sign up User-------------
const signupUser = async (req, res, next) => {
  const { username, userEmail, password } = req.body;
  let existUser;
  try {
    existUser = await User.findOne({ "userEmail": userEmail });
  } catch (err) {
    console.log(err);
  }
  if (existUser) {
    return res.status(404).json({ message: "User Already Exist" });
  }
  const user=new User({
    username,
    userEmail,
    password,
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(200).json({ user,message:"Register Success" });
};

//--------------Log in------------------
const loginUser=async(req,res,next)=>{
    const{userEmail,password}=req.body
    let existUser
    try{
        existUser = await User.findOne({ "userEmail": userEmail,"password":password });
    } catch (err) {
      console.log(err);
    }
    if (!existUser) {
      return res.status(404).json({ message: "Couldnt find user by this email..Try Again!!!!!" });
    }
    return res.status(200).json({ existUser,message:"Login Success" });
}

//---------------Remove User------------
const removeUser=async(req,res,next)=>{
    const id=req.params.id
    let user
    try{
        user = await User.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!user) {
      return res.status(404).json({ message: "Unable to delete" });
    }
    return res.status(200).json({message:"Deleted Successfully" });
}

module.exports={getUser,signupUser,loginUser,removeUser}
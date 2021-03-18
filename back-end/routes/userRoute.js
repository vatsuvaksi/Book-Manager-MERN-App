const express = require("express");
const User = require("../models/User");   //Imports the User Model to add/del/update data 
const generateTokens = require("../utils/generateTokens");
const userRoute = express.Router();                    //Creates Routes for the given post get put and del request 
//            <------------Routes---------------->
//------Users Routes-------

//Register user
userRoute.post("/", async function (req, res) {
  try {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    const user = await User.create({ name, email, password }); //Creates a new user with the definition from external sources like postman
    res.json({
      _id:user.id ,
       name : user.name , 
       password : user.password ,
        email : user.email,
        token : generateTokens(user._id)
      });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

//Login Route
userRoute.post("/login",  async function (req, res) {          //Check authentication 
    const  email = req.body.email;
    const password = req.body.password;
    const user =await User.findOne({email : email});
    if(user && (await user.isPasswordMatched(password))){
    //  res.status(200);                                    //if the user exists then it generates the status as okay
      
      res.json({
        _id:user.id ,
         name : user.name , 
         password : user.password ,
          email : user.email,
          token : generateTokens(user._id)
        });
        res.send(user);
    }else{
      //res.status(401)                            //if the user does not exist then it generates the status as 401 or not found
      //console.log();
      res.send('User not Found');
    }
//  res.send("login routes");
});

//Update routes
userRoute.put("/update",async function (req, res) {
  const user = await User.findById(req.user.id);
  if(user){
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    //This will encrypt automatically
    if(req.body.password){
      user.password = req.body.password || user.password;
    }
    const updateUser = await user.save();
    res.json({
      _id:updatedUser._id ,
      name : updatedUser.name , 
      password : updatedUser.password ,
       email : updatedUser.email,
       token : generateTokens(updatedUser._id)
    
    });
  }else{
    res.status(404);
  }

  res.send("update routes");
});
//Delete route
userRoute.delete("/:id", function (req, res) {
  // :id is used to target the particular ID to delete
  res.send("Delete route");
});

//Fetch Users routes
userRoute.get("/",async function (req, res) {
  const users = await User.find().populate('books');
  res.json(users);
  
});

module.exports = userRoute;

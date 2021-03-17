const express = require("express");
const User = require("../models/User");   //Imports the User Model to add/del/update data 
const userRoute = express.Router();                    //Creates Routes for the given post get put and del request 
//            <------------Routes---------------->
//------Users Routes-------

//Register user
userRoute.post("/register", async function (req, res) {
  try {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    const user = await User.create({ name, email, password }); //Creates a new user with the definition from external sources like postman
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

//Login Route
userRoute.post("/login", function (req, res) {
  res.send("login routes");
});

//Update routes
userRoute.put("/update", function (req, res) {
  res.send("update routes");
});
//Delete route
userRoute.delete("/:id", function (req, res) {
  // :id is used to target the particular ID to delete
  res.send("Delete route");
});

//Fetch Users routes
userRoute.get("/", function (req, res) {
  res.send("Fetching users");
});

module.exports = userRoute;

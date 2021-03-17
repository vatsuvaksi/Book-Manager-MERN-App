const express = require("express"); //Imports the express package from node modules
const app = express(); //functions are first class citizens hence assigning it to a constant for ease
const mongoose  = require("mongoose"); // Imports Mongoose
const dbConnect = require('./config/dbConnect');   //Imports the dataBase connection file using MongoDb from the configuration folder
const User = require('./models/User');
//Calling the data base connection after importing it from the configuration file
dbConnect();
//            <------------Routes---------------->
//------Users Routes-------

app.use(express.json());   //Takes the file from JSON format and uses request.body 

//Register user
app.post("/api/users/register", async function (req, res) {
 try{
   var name = req.body.name;
   var email = req.body.email;
   var password = req.body.password;
   const user = await User.create({name,email,password});           //Creates a new user with the definition from external sources like postman
   res.send(user);
 }catch(error){
   console.log(error);
 }
});

//Login Route
app.post("/api/users/login", function (req, res) {
  res.send("login routes");
});

//Update routes
app.put("/api/users/update", function (req, res) {
  res.send("update routes");
});
//Delete route
app.delete("/api/users/:id", function (req, res) {     // :id is used to target the particular ID to delete
  res.send("Delete route");
});

//Fetch Users routes
app.get('/api/users',function(req,res){
res.send("Fetching users");
});

//Server
const PORT = process.env.PORT || 5000; //This is the constant url used for heroku i.e  if there is no port declared then it should run locally on the the port 5000

app.listen(PORT, function () {
  //To get the application started at a server
  console.log(`the server is up and running on port: ${PORT}`);
});

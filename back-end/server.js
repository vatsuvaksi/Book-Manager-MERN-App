const express = require("express"); //Imports the express package from node modules
const app = express(); //functions are first class citizens hence assigning it to a constant for ease
const mongoose = require("mongoose"); // Imports Mongoose
const dbConnect = require("./config/dbConnect"); //Imports the dataBase connection file using MongoDb from the configuration folder
const userRoute = require("./routes/userRoute");
const bookRoute = require("./routes/bookRoute");
const dotenv = require('dotenv');
dotenv.config();           //Dotenv  package sexures the public key which should not be visible to other users, it attaches environment variables values

//Calling the data base connection after importing it from the configuration file
dbConnect();

app.use(express.json()); //Takes the file from JSON format and uses request.body

//Routes
//Users
app.use("/api/users", userRoute);
//Books
app.use("/api/books", bookRoute);

//Server
const PORT = process.env.PORT || 5000; //This is the constant url used for heroku i.e  if there is no port declared then it should run locally on the the port 5000

app.listen(PORT, function () {
  //To get the application started at a server
  console.log(`the server is up and running on port: ${PORT}`);
});

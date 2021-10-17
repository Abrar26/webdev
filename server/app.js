const express = require("express");
const mongoose = require("mongoose");
const Users = require("./model/userSchema");
const home = require("./routes/home");
const app = express();

app.use(express.json());
// MongoDB Connection 
const DB = "mongodb+srv://Abrar:webdev@cluster0.bd92f.mongodb.net/portfolio?retryWrites=true&w=majority";
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
        console.log("Connection to DB Successfull");
    })
    .catch(err =>{
        console.log("Connection to DB Failed!!!");
    });


//Routes
app.use("/addskill",home);

app.listen(3001 ,()=>{
    console.log("THIS IS RUNNING IN PORT 3001");
});
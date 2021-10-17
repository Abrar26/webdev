const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    percentage: {
        type : Number,
        required : true
    },
    
});


const Users = mongoose.model("users",userSchema);

module.exports = Users;
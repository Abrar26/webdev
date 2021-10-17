const express = require("express");
const router = express.Router();
require("../app");
const Users = require("../model/userSchema");

router.get("/",(req,res)=>{
    Users.find(function(err,result){
        if(!err){
            console.log(result)
            res.send(result)
        } else{
            res.send(err);
        }
    })
});

router.post("/",(req,res)=>{
    const {name , percentage} = req.body;
        
    const user = new Users({name, percentage});
    
    user.save().then(()=>{
        console.log(req.body);
        console.log("Successfully Data Added into DB...");
        res.status(200).json({message : "Successfully Data Added into DB..."});
    }).catch(err=>{
        console.log(err)
        res.status(500).json({message : "Failed process for Data Added into DB..."});
    })

    res.json(req.body);

});

module.exports = router;
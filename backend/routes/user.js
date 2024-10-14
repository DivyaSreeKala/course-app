const express = require('express');
const router = express.Router();

const jwt = require("jsonwebtoken")
router.use(express.json());

require('../db/connection')
const userModal = require('../model/userData');
const { MongoBulkWriteError } = require('mongodb');



router.post('/login',async(req,res)=>{
    try{
        const data = await userModal.findOne({userName:req.body.username})
        if(!data){
            res.json({message:"user not found"})
        }
        else{
            if(data.password == req.body.password){
                const payload = {uname:req.body.username,pwd:req.body.password}
                const token = jwt.sign(payload,"secret")
                res.send({message:'login successful',useToken:token})
            }
        }
    }catch{

    }
})

module.exports = router

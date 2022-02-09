const express = require("express")
const router = express.Router()
const Users = require('../models/user')

//get All Data from server
router.get('/', async(req,res) =>{
   try{
        const users = await Users.find()
        res.json(users);
   }
   catch(err){
       res.send("Error" + err);
   }
})

//get particular data using id
router.get('/:id', async(req,res) =>{
    try{
         const user = await Users.findById(req.params.id)
         res.json(user);
    }
    catch(err){
        res.send("Error" + err);
    }
 })

//insert data API
router.post('/', async(req,res) =>{
    
    const users = new Users({
        name : req.body.name,
        address : req.body.address,
        mobile : req.body.mobile,
        gender : req.body.gender
    })

    try{
        const u1 = await users.save();
        res.json(u1);
    }catch(err){
        res.send(err);
    }
})

router.patch('/:id', async(req,res) =>{
    try{
         const user = await Users.findById(req.params.id)
         user.address="Isanpur"
         const u1 = await user.save()
         res.json(u1);
    }
    catch(err){
        res.send("Error" + err);
    }
 })

 router.delete('/:id', async(req,res) =>{
    try{
         const user = await Users.findById(req.params.id)
         const u1 = await user.remove()
         res.json(u1);
    }
    catch(err){
        res.send("Error" + err);
    }
 })
  
module.exports = router
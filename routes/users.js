var express = require('express');
var router = express.Router();

let value = 0;
const users = [];

router.get('/all-users',(req,res)=>{
    res.json(users)
})
router.post('/add-users',(req,res)=>{
    
    let {name, email, mobile } = req.body
    let id = value++;
    users.push({id,name,email,mobile})
    res.send({message:"User added successfully!"})
})
router.put('/edit-users/:id',(req,res)=>{
    let id = req.params.id
    let {name, email, mobile } = req.body;

    let existing = users.filter((e)=>e.id==id)

    users.splice(users.indexOf(existing[0]),1,{id,name,email,mobile})

    res.send({
        message:"User Edited Successfully!",
        data:users
    })
})
router.delete('/delete-users/:id',(req,res)=>{
    let id = req.params.id
    let existing = users.filter((e)=>e.id==id)
    users.splice(users.indexOf(existing[0]),1)
    res.send({
        message:"User Deleted Successfully!",
        delData:existing
    })
})

module.exports = router;

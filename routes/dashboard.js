var express = require('express');
var router = express.Router();

router.get('/all',(req,res)=>{
    res.send({message:"Dashboard is Empty"})
})



module.exports = router;
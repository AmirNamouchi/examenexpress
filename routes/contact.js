var express = require('express');
var router = express.Router();

/* GET users listing. */
 const contactModel = require('../models/contact')
router.get("/", async function(req,res,next){
    try{
        const contact =await contactModel.find({});
    
    }catch(error){
        res.status(500).json({message: error.message})
    }
})











module.exports = router;
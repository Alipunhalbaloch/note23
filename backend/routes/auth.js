const express= require('express');
const router= express.Router();
const User =require("../models/User");
const {body, validationResult}=require('express-validator');


// Create a user using POST  "api/auth" doest require auth 
router.get('/',[
   body('name', 'enter a valid name').isLength({ min: 5}),
   body('email','enter a valid email ').isEmail(),
   body('password','password should be five character').isLength({ min: 5}),
], (req,res)=>{
   const errors=  validationResult(req);
   if(!errors.isEmpty()){
     return res.status(400).json({errors: errors.array()});
   }
   res.send(req.body);
})

module.exports= router;
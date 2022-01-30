const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
router.get('/',(req,res)=>{
    res.render('home')
})
router.get('/login',(req,res)=>{
    res.render('login')
})
router.get('/signup',(req,res)=>{
    res.render('signup')
})
router.get('*',(req,res)=>{
    res.send("Error!")
})

module.exports=router;
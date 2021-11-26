const express =require('express');
const router = express.Router();
const authcontroler = require('../../contoler/money.ctrl');


router.get('/states',(req,res)=>{
      authcontroler.getState(req,res);
});

module.exports =router;
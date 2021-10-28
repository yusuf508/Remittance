const express =require('express');
const router = express.Router();
const authcontroler = require('../../contoler/state.ctrl');


router.get('/states',(req,res)=>{
      authcontroler.states(req,res);
});

module.exports =router;
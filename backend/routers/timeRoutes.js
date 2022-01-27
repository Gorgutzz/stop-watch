const express = require('express')
const Time = require('../models/timeModel');

const router=express.Router();

// Post/store
router.post("/",async(req,res)=>{
    const time=new Time(req.body);
    const newTime=await time.save();
    if (newTime) {
        return res.status(201).send({ message: 'Time lapse added', data: newTime });
      }
      return res.status(500).send({ message: ' Time lapse not added.' });
})

// get for sorted time orders
router.get("/",async(req,res)=>{
    const times=await Time.find({}).sort({_id:-1})
    res.send(times);
  })

router.delete("/:id",async(req, res)=>{
    const time = req.params.id;
//    console.log(time)
    const x = await Time.deleteOne({ _id: time })
//    console.log({x})
    res.json({ ok: 1 })
})


module.exports=router;

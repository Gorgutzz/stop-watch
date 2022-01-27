const mongoose=require('mongoose')
const {Schema, Mongoose} = mongoose

const TimeSchema = new mongoose.Schema({
    timeStamp:{type:String,required:true}
})

const Timemodel = mongoose.model("Time",TimeSchema);


module.exports= Timemodel;

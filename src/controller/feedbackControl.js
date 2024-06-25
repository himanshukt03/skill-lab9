//feedbackcontrol.js in control file 
const express=require('express')
const {msg}=require('../model/feedback')

let createFeedback=async function(req,res){
    let data=req.body;
    let result=await msg.create(data);
    res.json({msg:"Thank You For your feedback", data:result})
}

let getFeedback=async function(req,res){
    let data=await feedbackModel.find()
    res.status(200).json({msg : "User Feedback", data:data})
}
module.exports= {createFeedback, getFeedback}

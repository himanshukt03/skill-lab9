const express = require('express')
const {stu} = require('../model/student')

let createStudent = async function(req,res){
    let data = req.body;
    let result = await stu.create(data);
    res.json({msg : "Student data created", data:result})
}

//TOKEN----------------------
const login = async(req,res) =>{
    try{
        let data = req.body
        let {email, USN} = data;
        
        if(!email || !USN){
            res.status(404).send({msg: "Student not found!"})
        }
        let checkStudent = await studentModel.findOne({USN:USN})
        if(!checkStudent) { res.status(404)
            .send({msg: "Student is not registered"})}
        const token = jwt.sign({USN:USN} , jwt_secret , {expiresIn:'1h'}
        )
        return res.status(201).send({msg: "Token generated successfully", token:token})
    }
    catch (error){
        console.log(error);
        res.status(500).json({
        status: false,
        message: error.message,
    });
    }
}
module.exports = {createStudent}
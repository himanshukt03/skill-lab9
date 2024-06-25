const jwt = require('jsonwebtoken')
const jwt_secret = "himanshu"

const authorization = async(req,res,next)=>{
    try{
        const token = req.header('authorization')
        if(!token){ res.status(401).send({msg:"Access Denied"})}

        const checkStudent = jwt.verify(token, jwt_secret)
        req.USN = checkStudent.USN;
        next();
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            status: false,
            message : "Internal Server error",

        });
    }
}

module.exports = {authorization}


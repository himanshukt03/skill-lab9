// Create server using node.js and print your name on sever
const express = require('express');
const mongoose = require('mongoose')

const route = require('./src/route/routes')
const PORT = 2500

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://himanshushettykt03:himanshu@cluster0.iuo06km.mongodb.net/test2")
.then(()=>{
  console.log("Database Connected")
})
.catch((err)=>{
  console.log(err.message)
})
app.use('/',route)
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


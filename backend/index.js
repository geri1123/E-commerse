const port=4000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require("cors");

app.use(express.json());
app.use(cors());
//Database connection with mongoDB
mongoose.connect("mongodb+srv://greatstackdev:geri1996@cluster0.akfwjwh.mongodb.net/e-commerce");
//API creation
app.get("/" , (req , res)=>{
        res.send("Express App is Running")
})
app.listen(port , (error)=>{
    if(!error){
        console.log("Server running on Port" +port)
    } else{
        console.log("Error :"+error)
    }
})


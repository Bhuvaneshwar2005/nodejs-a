const express= require("express");
const app=express();
const path= require("path");


app.get("/ms",(req,res)=>{
    res.sendFile(path.join(__dirname,"msdhoni.html"))
})
app.get("/kohli",(req,res)=>{
    res.sendFile(path.join(__dirname,"kohli.html"))
})
app.get("/kl",(req,res)=>{
    res.sendFile(path.join(__dirname,"rahul.html"))
})

app.listen(4021   ,   ()=>{
    console.log("server is running");
})

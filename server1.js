const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

const url = "mongodb+srv://bhuvaneshwaran:SUDbhu1985@cluster0.yhkaneq.mongodb.net/?retryWrites=true&w=majority"

const dbname = "sample";
let db = ""

async function connnectDb(){
    try{
        const client = await MongoClient.connect(url);
        console.log('Connected to MongoDb');
        db = client.db(dbname);
    }
    catch (error){
         console.log(error);
    }
}
connnectDb().then(()=>{
    app.listen(3000, ()=>{
        console.log("server running");
    })
})

app.get("/",async (req,res)=>{
    const data = {name:"etho", username : "therla"};
    const result = await db.collection("user_sample").insertOne(data);
    console.log("data inserted");
    res.send("data inserted")
})
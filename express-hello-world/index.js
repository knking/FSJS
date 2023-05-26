const express = require('express')

const app = express()

const PORT =3000;

app.get("/",(req,res)=>{
res.status(200).send("hellow world")
})


app.get("/name",(req,res)=>{
    res.status(201).send("My Name is Krishna")
})
app.listen(PORT,()=>{
    console.log("Server is Running...")
})
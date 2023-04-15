const express = require('express')

const app = express()

const PORT =3000;

app.get("/",(req,res)=>{
res.send("hellow world")
})


app.get("/name",(req,res)=>{
    res.send("My Name is Krishna")
})
app.listen(PORT,()=>{
    console.log("Server is Running...")
})
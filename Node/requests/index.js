import express from "express"

const app=express()
const port=3000

app.listen(port , ()=>{
    console.log(`server has started ${port}`);
})

app.get("/",(req,res)=>{
    console.log("heloo");
    // res.send("Hello boiiii")
    res.send("<h1>Hello boiiii</h1>")
})

app.get("/about",(req,res)=>{
    console.log("heloo");
    res.send("<h1>About page boiiii</h1>")
})
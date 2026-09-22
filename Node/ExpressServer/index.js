import express from "express";
const app = express();
const port = 3001;

app.get("/",(req,res)=>{
  // res.send("Heyy bhaiii");
  res.send("<h1>hello bhaiii</h1>");
})

app.get("/about",(req,res)=>{
  // res.send("Heyy bhaiii");
  res.send("<h1>hello its about</h1>");
})

app.get("/contact",(req,res)=>{
  // res.send("Heyy bhaiii");
  res.send("<h1>contact page</h1>");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

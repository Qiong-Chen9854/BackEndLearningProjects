import express from "express";
const app = express();
const port = 3000;

app.get("/",(req, res)=>{
  res.send("Hello World --- from Qiong Chen");
})

app.get("/contact",(req, res)=>{
  res.send("<h1>Contact Me</h1><p>My Phone Number: 6149050188.</p>");
})

app.get("/about",(req,res)=>{
  res.send("<h1>About Me</h1><p>My name is Qiong Chen. I am a web developer.</p>");
})
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})
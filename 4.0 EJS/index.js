import express from "express";
import bodyParser from "body-parser";

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

const d = new Date();
var dayTime = d.getDay();

let type = "weekday";
let adv = "work hard!"

app.get("/",(req,res)=>{
  if(dayTime === 0 || dayTime === 6) {
      type = "weekend";
      adv = "have fun!"
  }

  res.render("index.ejs",
    {
      day: type,
      advice: adv,
    }
  )
  
})
console.log(dayTime);

app.listen(port,()=>{
  console.log(`Server is running at port ${port}`)
})
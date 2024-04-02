
const express = require("express");
const {engine} = require("express-handlebars");
const employeeRoute = require("./routes/employeeRoutes")
const mongoose = require("mongoose")

const app = express();


app.engine("handlebars",engine());
app.set("view engine","handlebars")

let connectDb = async () => {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/employees");
      console.log("Db connected successfully");
    } catch (error) {
      console.log(error);
    }
  };
  connectDb();

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("home",{title:"Home Page"});
})

app.use("/employee", employeeRoute);


app.listen(5000, err=>{
    if(err) throw err;

    console.log('app is running on port 5000')
})
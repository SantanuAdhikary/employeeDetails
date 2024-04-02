
const {Router} = require("express");
const EmployeeSchema = require("../Model/Employee")

const router = Router();

router.get("/create-emp", (req,res)=>{

    res.render("employees/create-emp",{title:"create employee"})
})

router.get("/all-emp", async (req, res) => {
    let payload = await EmployeeSchema.find({}).lean();
    res.render("employees/all-emp", { title: "All employees", payload });
  });

router.post("/create-emp", async(req,res)=>{
    let body = await EmployeeSchema.create(req.body);
    res.redirect('/',302, {body})
})

module.exports = router 
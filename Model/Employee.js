
const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(

    {
        eid:{
            type : String,
            required:true
        },
        
        ename: {
            type : String,
            require:true
        }
    },
    { timestamps: true}
)

module.exports = mongoose.model("employees",EmployeeSchema);
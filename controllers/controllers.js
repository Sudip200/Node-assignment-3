const { Employee } = require("../models/model")

exports.handleHome=(req,res)=>{
    res.render('form')
}
exports.submitHandler=(req,res)=>{

    const employee = new Employee(req.body.name)
    employee.save(()=>{
        res.render('message',{message:'User Submitted'})
    })

}
exports.listAllUsers=(req,res)=>{
    Employee.listAll((data)=>{
        res.render('listusers',{data:data})
    })
}
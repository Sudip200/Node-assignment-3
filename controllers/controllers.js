const { Employee } = require("../models/model")
const { v4: uuidv4 } = require('uuid');
exports.handleHome=(req,res)=>{
    res.render('form')
}
exports.submitHandler=(req,res)=>{
    const employee = new Employee(uuidv4(),req.body.name)
    employee.save(()=>{
        res.render('message',{message:'User Submitted'})
    })
}
exports.listAllUsers=(req,res)=>{
    Employee.listAll((data)=>{
        res.render('listusers',{data:data})
    })
}
exports.editUser=(req,res)=>{
    const id = req.params.id
    res.render('edit',{id:id})
}
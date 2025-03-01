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
exports.vieweditUser=(req,res)=>{
    const id = req.params.id
    res.render('edit',{id:id})
} 
exports.editUser =(req,res)=>{
    const id = req.params.id;
    console.log(req.body.name)
    Employee.editEmployee(id,req.body.name,()=>{
       res.render('message',{message:'Edited User Successfully'})
    })
}
exports.deleteUser =(req,res)=>{
    const id = req.params.id;
    Employee.deleteEmployee(id,()=>{
        res.render('message',{message:'deleted user successfully'})
    })
}
const { Employee } = require("../models/model")
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
exports.handleHome=(req,res)=>{
    res.render('form')
}
exports.submitHandler=(req,res)=>{
    const employee = new Employee(uuidv4(),req.body.name)
    employee.save(()=>{
        res.render('message',{message:'User Submitted',redirect:'/users'})
    },(e)=>res.status(500).render('error',{message:e.message}))
}
exports.listAllUsers=(req,res)=>{
    Employee.listAll((data)=>{
        res.render('listusers',{data:data})
    })
}
exports.vieweditUser=(req,res)=>{
    const id = req.params.id
    fs.readFile(path.join(__dirname,'..','data','users.json'),(err,data)=>{
        try{
             if(err){
                throw new Error('Internal Server Error')
             }
             let employees = JSON.parse(data);
             let employee = employees.find((item)=>item.id == id)
             res.status(200).render('edit',{name:employee.name,id:id})
        }catch(e){
             res.status(500).render('error',{message:e.message})
        }
    })
} 
exports.editUser =(req,res)=>{
    const id = req.params.id;
    console.log(req.body.name)
    Employee.editEmployee(id,req.body.name,()=>{
       res.render('message',{message:'Edited User Successfully',redirect:'/users'})
    },(e)=> {
        console.log('inside callback',e.message)
        res.status(500).render('error',{message:e.message})
})
}
exports.deleteUser =(req,res)=>{
    const id = req.params.id;
    Employee.deleteEmployee(id,()=>{
        res.render('message',{message:'deleted user successfully',redirect:'/users'})
    },(e)=>res.status(500).render('error',{message:e.message}))
}
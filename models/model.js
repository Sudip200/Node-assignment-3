const fs = require('fs');
const path = require('path')
class Employee{
    constructor(id,name){
        console.log(id,name)
        this.id=id
        this.name=name
    }  
    // save employee
    save(cb,errorcb){
            fs.readFile(path.join(__dirname,'../','data','users.json'),(err,data)=>{
               try{
                 if(err){
                    throw new Error('Internal Server Error')
                 } 
                let jsObj = JSON.parse(data);
                 
                jsObj.push(this)
                console.log(jsObj)
                fs.writeFile(path.join(__dirname,'../','data','users.json'),JSON.stringify(jsObj),(err)=>{
                    if(err){
                        throw new Error('Internal Server Error');
                    }
                   cb()
               })
               }catch(e){
                  errorcb(e)
               }
              })
    }
    // list all employees
    static listAll(cb){
        fs.readFile(path.join(__dirname,'../','data','users.json'),(err,data)=>{
             cb(JSON.parse(data))
        })
    }
    // edit employee
    static editEmployee(id,name,cb,errorcb){
        fs.readFile(path.join(__dirname,'../','data','users.json'),(err,data)=>{
            try {
               if(err){
                throw new Error('Internal Server Error');
               }
             let employees = JSON.parse(data);
               employees = employees.map((employee)=>{
                  if(employee.id === id){
                    return { id ,name}
                  }
                  return employee
               })
               fs.writeFile(path.join(__dirname,'../','data','users.json'),JSON.stringify(employees),(err)=>{
                if(err){
                    throw new Error('Internal Server Error')
                }
                cb()
               })
               
            }catch(e){
                console.log(e.message)
                errorcb(e)
            }
    }) 
        
    }
    // delete employee
    static deleteEmployee(id,cb,errorcb){
        fs.readFile(path.join(__dirname,'../','data','users.json'),(err,data)=>{
            try {
               if(err){
                throw new Error('Internal Server Error');
               }
               let employees = JSON.parse(data);
            employees = employees.filter((employee)=> employee.id !== id)
               fs.writeFile(path.join(__dirname,'../','data','users.json'),JSON.stringify(employees),(err)=>{
                if(err){
                    throw new Error('Internal Server Error')
                }
                cb()
               })
               
            }catch(e){
                errorcb(e)
            }
    }
        )
    }
}
module.exports ={
    Employee
}
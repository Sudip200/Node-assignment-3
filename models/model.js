const fs = require('fs');
const path = require('path')
class Employee{
    constructor(name){
        this.name=name
    }  
    save(cb){
        try{
            fs.readFile(path.join(__dirname,'../','data','users.json'),(err,data)=>{
                let jsObj = JSON.parse(data);
                jsObj.push(this)
                console.log(jsObj)

                fs.writeFile(path.join(__dirname,'../','data','users.json'),JSON.stringify(jsObj),(err)=>{
                   cb()
               })
              })
         }catch(e){
            console.log(e)
            return
         }
       
    }
    static listAll(cb){
        fs.readFile(path.join(__dirname,'../','data','users.json'),(err,data)=>{
             cb(JSON.parse(data))
        })
    }
}
module.exports ={
    Employee
}
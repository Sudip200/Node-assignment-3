const fs = require('fs');
const path = require('path')
class Employee{
    constructor(name){
        this.name=name
    }  
    save(cb){
        
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
                  res.status(500).render('error',{message:'Internal Server Error'})
               }
              })
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
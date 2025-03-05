const path = require('path');
const fs = require('fs');

exports.validateUser = function(req,res,next){
    let mode;
    if(req.url === '/add-user'){
        mode = 'add'
    }else if(req.url.includes('/edit')){
        mode = 'edit'
    }
    const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);
    // check if name is valid
    if(!isValidName(req.body.name)){
        res.status(400).
        render('error',{message:'Name is not valid',redirect:
        mode === 'add'?'/':'/edit/'+
        req.params.id
        })
        return
    }
    // check if user already exist
     fs.readFile(path.join(__dirname,'..','data','users.json'),(err,data)=>{
        if(err){
            console.log(err)
            res.render('error',{message:err,redirect:'/'})
            return
        }
    
        let employees= JSON.parse(data);
        for(let employee of employees){
            if(employee.name == req.body.name){
                res.status(400).
                render('error',{message:'User Already Exist',redirect:
                mode === 'add'?'/':'/edit/'+
                req.params.id
                })
                return
            }
        }
        next()
     })
}
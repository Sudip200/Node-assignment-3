const express= require('express')
const app = express()
const router = require('./routes/routes')
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('connect-flash');

app.use(flash())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.set('views','views')
app.use(router)

app.listen(3000,()=>{
    console.log('listening on port 3000')
})
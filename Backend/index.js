const express=require('express');
const mongooseConnect=require('./db/db.js')
const shreeDayal=require('./models/user.models.js')
const cors=require('cors')
const app=express();
app.use(express.json())
app.use(cors())
mongooseConnect().then(
    app.listen(3000,()=>{
        console.log('server is running on 3000')
    })
)
app.post('/database',(req,res)=>{
    const {name,Gender,villagename,mobilenumber,reason}=req.body;
    console.log(req.body)
    
    console.log(reason)
    if(name.length==0){
        res.send('Enter a valid name!!')
    }
    if(Gender.length==0){
        res.send('Enter a valid gender!!')
    }
    if(villagename.length==0){
        res.send('Enter a valid village name!')
    }
    if(mobilenumber.length!=10){
        res.send('Enter a valid Mobile number!!')
    }
    if(reason.length==0){
        res.send('Enter a valid reason!!')
    }
    req.body={}
    shreeDayal.create(
        {
            name:name,
            Gender:Gender,
            village:villagename,
            mobilenumber:mobilenumber,
            reason:reason,
            

        }
    )
})
app.get('/',(req,res)=>{
    res.send('Hello')
})


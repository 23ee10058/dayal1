const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        Gender:{
            type:String,
            require:true
        },
        village:{
            type:String,
            require:true
        },
        mobilenumber:{
            type:Number,
            require:true
        },
        reason:{
            type:String,
            require:true
        },
        serial:{
            type:Number,
        }
    }
)
const shreeDayal=mongoose.model('shreeDayal',UserSchema)
module.exports=shreeDayal
const mongoose=require('mongoose')


const mongooseConnect=async()=>{
    try {
        const connection=await mongoose.connect("mongodb://localhost:27017/local")
        console.log('mongoose connected successfully')
        
    } catch (error) {
        throw new Error("Failed to connect");
        
    }
}
module.exports=mongooseConnect
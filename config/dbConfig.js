const mongoose= require ('mongoose')

const dbConnection=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/e-com").then(()=>{
        console.log("db connected");
        
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports= dbConnection
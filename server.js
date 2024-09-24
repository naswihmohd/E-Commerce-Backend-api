const express = require ('express')
const userRouter=require('./router/userRouter')
const dbConnection = require('./config/dbConfig')


const app=express()
dbConnection()
app.use('/',userRouter)










app.listen(4000,()=>{
    console.log('server is running');
})
const express = require("express")
const mongoose = require("mongoose")
const postModel = require("./schema")
const app = express()
const port = process.env.PORT || 5000
 
mongoose.connect("mongodb+srv://admin:admin@cluster0.x26vs.mongodb.net/dev",{
    useNewUrlParser: true,
    useUnifiedTopology :true
})
mongoose.connection.on("connected",() =>console.log("Database Connected..."))
mongoose.connection.on("error",(error)=>console.log(`Error${error.message}`))


app.get("/delete", (request, response) => {
    postModel.deleteMany({title:"Candidate Name" , description:" M.Sharjeel "},(error,data)=>{
        if(error){
            response.send(error.message)
        }
        else {
            response.send(data)
            response.send("Success")
        }
    })
})

app.get("/add", (request, response) => {
    postModel.create({title:"Candidate Name" , description:" M.faizan "},(error,data)=>{
        if(error){
            response.send(error.message)
        }
        else {
            response.send(data)
            response.send("Success")
        }
    })
})

app.get("/find", (request, response) => {
    postModel.find({title:"Candidate Name" , description:" M.Sharjeel "},(error,data)=>{
        if(error){
            response.send(error.message)
        }
        else {
            response.send(data)
            response.send("Success")
        }
    })
})

app.use("/", (request, response, next) => {
    const abc = true;
    if (abc) {
        next()
    }
    else {
        response.send("Unauthorized restrictions")
    }
})

app.get("/", (request, response) => {
    response.send("Homepage")

})

app.listen(port, console.log(`Server is running on ${port}`))






























// mongoose.connection.on("connected",()=>console.log("Database Connected"))
// mongoose.connection.on("error",(error)=>console.log(`Error:${error.message}`))
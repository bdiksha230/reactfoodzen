const mongoose=require('mongoose')

mongoose.connnect("mongodb://localhost:27027/foodzen")
.then(() =>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("error");
})
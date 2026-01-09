const mongoose = require("mongoose")

module.exports = async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Bot-mongoodb")
        console.log("db connected")
    }catch(e){
        console.error(e)
        process.exit(1)
    }
}


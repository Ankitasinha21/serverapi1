const mongoose = require("mongoose");
const Live_url ='mongodb+srv://ankitasinhaha2108:1234Anki21@cluster0.uwyynth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async ()=>{
    return mongoose.connect(process.env.Live_url)

    .then(()=>{
        console.log("database connection successful");
    })
    .catch((error)=>{
        console.log("not connected",error);
    });
};

module.exports = connectDB;
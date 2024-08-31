const mongoose = require('mongoose')

// Connect to the database
const connectDB = () => {
    try{
        mongoose.connect('mongodb://localhost:27017/myDatabase')
        console.log('Connected to the database')
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB
        
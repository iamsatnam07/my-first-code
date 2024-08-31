const express = require('express')
const app = express()
const port = 8000
const connectDB = require('./DB/dbConnection')
const User = require('./DB/user')
const cors = require('cors')

connectDB()
app.use(express.json())

app.use(cors())

// Registration
app.post('/register',async(req,res) => {
    try{
        res.send('Registration failed')
        const {username,password} = req.body
        const user = new User({username,password})
        await user.save()
        res.send('Registration Succesful')
    }
    catch(err){
        res.send('Registration failed')
    }
})

// Login
app.post('/login', async(req,res) => {
    try{
        const {username,password} = req.body
        const user = await User.findOne({username})

        console.log(user);

        if(!user){
            return res.status(401).json({error:'Invalid username or password'});
        }
        if(user.password !== password){
            return res.status(401).json({error:'Invalid username or password'});
        }
        res.status(200).json({error:'Login succesfully'});
    }
    catch(err){
        res.status(500).json({error:'Login fail'});
    }
})

app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})
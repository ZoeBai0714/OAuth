const express = require("express");
const app = express();
//import the auth google routes because we don't want to mess up this file
const authRoutes = require('./routes/auth-routes');
app.use('/auth',authRoutes);// add suffix, everytime we use authRoutes it will add /auth in the front

app.listen(3001, ()=>{
    console.log("listening to 3001...")
})

//routes
app.get('/', (req, res)=>{
    res.send("Hello world")
})


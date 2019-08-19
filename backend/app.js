const express = require("express");
const app = express();

app.listen(3001, ()=>{
    console.log("listening to 3001...")
})


//routes
app.get('/', (req, res)=>{
    console.log("You reached me")
})
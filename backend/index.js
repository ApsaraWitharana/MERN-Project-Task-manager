const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const PORT =process.env.PORT || 8080; 

app.get('/',(req,res)=>{
    res.send('Hello form the server');
})
app.listen(PORT,()=>{
    console.log('Server is runing on PORT=${PORT}')
})
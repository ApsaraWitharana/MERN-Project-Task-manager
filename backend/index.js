const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const PORT =process.env.PORT || 8080; 
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');

app.get('/',(req,res)=> {
    res.send('Hello form the server');
});
app.use(bodyParser.json());
app.use('/tasks',TaskRouter)
app.listen(PORT, () => {
    console.log('Server is runing on PORT=${PORT}');
})
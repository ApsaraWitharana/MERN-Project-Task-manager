const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const cors = require('cors');


// Allow requests from your frontend
app.use(cors({
  origin: 'http://192.168.8.182:3000', // Frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true // Allow sending cookies/authentication
}));
const PORT =process.env.PORT || 8080; 
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');

app.get('/tasks',(req,res)=> {
    res.send('Hello form the server');
});
app.use(bodyParser.json());
app.use('/tasks',TaskRouter)
app.listen(PORT, () => {
    console.log('Server is runing on PORT=${PORT}');
})

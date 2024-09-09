const TaskModel = require("../Models/TaskModel");

const createTask = async(req,res) => {
    const data = req.body;
    try{
     const model = new TaskModel(data);
     await model.save();
     res.status(201)
      .json({message:'Task is created', success : true });
    }catch(err){
        res.status(500).json({message:'Failed to create task',success : false });
    }
}

module.exports = {
    createTask
}
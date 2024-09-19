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

//fetchall task
const fetchAllTasks = async(req,res) => {
    try{
     const data = await TaskModel.find({});
     res.status(200)
      .json({message:'All Tack', success : true, data });
    }catch (err){
        res.status(500).json({message:'Failed to getall task',success : false });
    }
}

//update task
const updateTaskById = async(req,res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const obj = {$set: {...body }};
     await TaskModel.findByIdAndUpdate(id, obj)
     res.status(200)
      .json({message:'All Tack Updated', success : true });
    }catch (err){
        res.status(500).json({message:'Failed to update task',success : false });
    }
}

//delete task
const deleteTaskById = async(req,res) => {
    try{
     const id = req.params.id;
     await TaskModel.findByIdAndDelete(id);
     res.status(200)
      .json({message:'All Tack Delete', success : true });
    }catch (err){
        res.status(500).json({message:'Failed to create task',success : false });
    }
}

module.exports = {
    createTask,
    fetchAllTasks,
    updateTaskById,
   deleteTaskById

}
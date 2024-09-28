import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/tasks');
      setTasks(response.data.data); // Assuming the tasks are in the `data` field of the response
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Create a new task
  const addTask = async () => {
    try {
      await axios.post('http://localhost:8080/tasks', { taskName: newTask });
      setNewTask('');
      fetchTasks(); // Refresh the tasks after adding a new one
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Update a task
  const updateTask = async (taskId, updatedTaskName) => {
    try {
      await axios.put(`http://localhost:8080/tasks/${taskId}`, { taskName: updatedTaskName });
      fetchTasks(); // Refresh the tasks after update
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Delete a task
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${taskId}`);
      fetchTasks(); // Refresh the tasks after delete
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <input
              type="text"
              value={task.taskName}
              onChange={(e) => updateTask(task._id, e.target.value)}
            />
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;

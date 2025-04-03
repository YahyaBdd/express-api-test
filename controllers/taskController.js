var fs = require("fs");
const path = require('path');
const tasksPath = path.join(__dirname, '../models/tasks.json');

function readJsonFileSync(){
    var file = fs.readFileSync(tasksPath);
    return JSON.parse(file);
}

function writeJsonFileSync(tasks){
    fs.writeFileSync(tasksPath, JSON.stringify(tasks, null, 2));
}


exports.getTasks = (req, res) => {
    const tasks = readJsonFileSync();
    res.json(tasks);
  };

exports.createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description required' });
    }

    const tasks = readJsonFileSync();
    // get the last task id
    const lastTaskId = tasks[tasks.length - 1].id;

    const newTask = {
        id: lastTaskId + 1,
        title,
        description
    };
    tasks.push(newTask);
    writeJsonFileSync(tasks);
    res.status(201).json(newTask);
};
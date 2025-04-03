var fs = require("fs");
const path = require('path');
const tasksPath = path.join(__dirname, '../models/tasks.json');

function readJsonFileSync(){
    var file = fs.readFileSync(tasksPath);
    return JSON.parse(file);
}

exports.getTasks = (req, res) => {
    const tasks = readJsonFileSync();
    res.json(tasks);
  };
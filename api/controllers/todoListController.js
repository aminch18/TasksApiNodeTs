var mongoose = require('mongoose'), Task = mongoose.model('Task');

exports.getAllTasks = (req, res) => {
    Task.find({}, (error, task) => {
        error ? res.send(error) : res.json(task);
    });
};

exports.createTask = (req, res) => {
    let newTask = new Task(req.body);
    newTask.save((error, task) => {
        error ? res.send(error) : res.json(task);
    });
};

exports.getTask = (req, res) => {
    Task.findById(req.params.taskId, (error, task) => {
        error ? res.send(error) : res.json(task);
    });
};

exports.updateTask = (req, res) => {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, (error, task) => {
        error ? res.send(error) : res.json(task);
    });
}

exports.deleteTask = (req, res) => {
    Task.findOneAndRemove({_id: req.params.taskId}, (error, task) => {
        error ? res.send(error) : res.json({message: "Task was deleted succesfully"});
    })
}
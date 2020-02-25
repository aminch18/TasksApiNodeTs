module.exports = (app) => {
    var todoList = require('../controllers/todoListController');

    app.route('/tasks')
        .get(todoList.getAllTasks)
        .post(todoList.createTask);

    app.route('/tasks/:taskId')
        .get(todoList.getTask)
        .put(todoList.updateTask)
        .delete(todoList.deleteTask); 
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TaskModel_1 = __importDefault(require("../models/TaskModel"));
var TaskService = /** @class */ (function () {
    function TaskService() {
        this.createTask = function (req, resp) { return new Promise(function (resolve, reject) {
            var newTask = new TaskModel_1.default(req.body);
            console.log(newTask);
            newTask.save(function (error, task) {
                error ? reject(error) : resolve(task);
            });
        }); };
        this.getTask = function (req, resp) { return new Promise(function (resolve, reject) {
            TaskModel_1.default.findById(req.params.taskId, function (response, error) {
                error ? reject(error) : resolve(response);
            });
        }); };
        this.getAllTasks = function (req, resp) { return new Promise(function (resolve, reject) {
            TaskModel_1.default.find({}, function (response, error) {
                // error ? reject(error) : resolve(response);
                if (error) {
                    reject(error);
                }
                else {
                    console.log(response);
                    resolve(response);
                }
            });
        }); };
        this.updateTask = function (req, resp) { return new Promise(function (resolve, reject) {
            TaskModel_1.default.findByIdAndUpdate(req.params.taskId, req.body, function (response, error) {
                error ? reject(error) : resolve(response);
            });
        }); };
        this.deleteTask = function (req, resp) { return new Promise(function (resolve, reject) {
            TaskModel_1.default.findByIdAndDelete(req.params.taskId, function (response, error) {
                error ? reject(error) : resolve(response);
            });
        }); };
    }
    return TaskService;
}());
exports.default = TaskService;

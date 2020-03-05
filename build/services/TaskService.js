"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TaskModel_1 = __importDefault(require("../models/TaskModel"));
var TaskService = /** @class */ (function () {
    function TaskService() {
        this.createTask = function (req) { return new TaskModel_1.default(req.body).save().then(function (task) { return task; }).catch(function (error) { return error; }); };
        this.getTask = function (req) { return TaskModel_1.default.findOne({ taskId: req.params.taskId }).exec(); };
        this.getAllTasks = function () { return TaskModel_1.default.find({}).exec(); };
        this.updateTask = function (req) { return TaskModel_1.default.findOneAndUpdate({ taskId: req.params.taskId }, req.body).exec(); };
        this.deleteTaskById = function (req) { return TaskModel_1.default.findOneAndDelete({ id: req.params.id }).exec(); };
    }
    return TaskService;
}());
exports.default = TaskService;
// //public deleteTaskByTaskId = (req: Request): Promise<ITaskModel | null> => TaskModel.findOneAndDelete({taskId: req.params.taskId }).exec();
// public deleteTaskByTaskId = (id: string): Promise<ITaskModel | null> => TaskModel.findOneAndDelete({taskId: id }).exec();
// public deleteAllTasks = async (req:Request, resp:Response, next: NextFunction) => {
//     let taskService = new TaskService();
//     try
//     {
//         var tasks = await taskService.getAllTasks();
//         let deletedTasks: Array<ITaskModel | null> = [];
//         tasks.map(async (task) => 
//         {
//             console.log(task);
//             const deletedTask = await taskService.deleteTaskByTaskId(task.taskId);
//             console.log(deletedTask);
//         });
//         if(deletedTasks == null){
//             resp.status(400).send("Something went wrong");
//         }
//         resp.status(200).json({deletedTasks, message:"This tasks have been deleted succesfully"});
//     }
//     catch(error)
//     {
//         next(error);
//     }
// }
//        this.router.delete('/remove', this.deleteAllTasks);

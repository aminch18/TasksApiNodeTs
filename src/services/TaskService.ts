import TaskModel from "../models/TaskModel";
import ITaskService from "../interfaces/ITaskService";
import { Request } from 'express';
import ITaskModel from "../interfaces/ITodoModel";

class TaskService implements ITaskService
{

    public createTask = (req:Request): Promise<ITaskModel> => new TaskModel(req.body).save().then(task => task).catch(error => error);

    public getTask = (req: Request): Promise<ITaskModel | null> => TaskModel.findOne({taskId: req.params.taskId }).exec();
        
    public getAllTasks = (): Promise<ITaskModel[]> => TaskModel.find({}).exec();

    public updateTask = (req: Request): Promise<ITaskModel | null> => TaskModel.findOneAndUpdate({taskId: req.params.taskId }, req.body).exec();

    public deleteTaskById = (req: Request): Promise<ITaskModel | null> => TaskModel.findOneAndDelete({id: req.params.id }).exec();

}    

export default TaskService;


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
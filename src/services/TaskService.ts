import TaskModel from "../models/TaskModel";
import ITaskService from "../interfaces/ITaskService";
import { Request, Response } from 'express';
import ITaskModel from "../interfaces/ITodoModel";

class TaskService implements ITaskService
{

    public createTask = (req:Request, resp:Response): Promise<ITaskModel> => new Promise ( 
        (resolve:any, reject:any) => { 
            const newTask = new TaskModel(req.body);
            newTask.save((error, task) => {
                error ? reject(error) : resolve(task);
            });
        }
    );

    public getTask = (req: Request, resp:Response): Promise<ITaskModel> => new Promise ( 
        (resolve:any, reject:any) => {
            TaskModel.findById(req.params.taskId, (response, error) => {
                error ? reject(error) : resolve(response);
        }).lean();
    });

    public getAllTasks = (req: Request, resp:Response): Promise<ITaskModel> => new Promise (
        (resolve:any, reject:any) => {
            TaskModel.find({}, (response, error) => {
                error ? reject(error) : resolve(response);
        }).lean();
    });


    public updateTask = (req: Request, resp:Response): Promise<ITaskModel> => new Promise(
        (resolve:any, reject:any) => {
            TaskModel.findByIdAndUpdate(req.params.taskId, req.body, (response, error) => {
                error ? reject(error) : resolve(response);
        });
    });

    public deleteTask = (req: Request, resp:Response): Promise<boolean> => new Promise(
        (resolve:any, reject:any) => {
            TaskModel.findByIdAndDelete(req.params.taskId, (response, error) => {
                error ? reject(error) : resolve(response);
        });
    });

}

export default TaskService;
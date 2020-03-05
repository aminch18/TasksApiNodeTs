import express, { Router, Request, Response, NextFunction } from 'express';
import IControllerBase from '../interfaces/IControllerBase';
import TaskService from "../services/TaskService";
import ITaskModel from '../interfaces/ITodoModel';

class TaskController implements IControllerBase 
{
    public router: Router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() :void {
        console.log("Init routes")
        this.router.get('/', this.getTasks);
        this.router.get('/task/:taskId', this.getTask);
        this.router.post('/create', this.createTask);
        this.router.put('/update/:taskId', this.updateTask);
        this.router.delete('/remove/:taskId', this.deleteTask);
    }


    public getTasks = async (req:Request, resp:Response, next: NextFunction) =>  {
        let taskService = new TaskService();
        try
        {
            var task = await taskService.getAllTasks();
            resp.json(task);
        }
        catch(error)
        {
            next(error);
        }
    }

    public getTask = async (req:Request, resp:Response, next: NextFunction) =>  {
        let taskService = new TaskService();
        console.log("getting task")
        try
        {
            console.log(req.params.taskId)
            var task = await taskService.getTask(req);
            console.log(task)
            resp.json(task);
        }
        catch(error)
        {
            console.log(error);
            next(error);
        }
    }

    public createTask = async (req:Request, resp:Response, next: NextFunction) => {
        let taskService = new TaskService();
        try
        {
            var task = await taskService.createTask(req);
            resp.send(task);
        }
        catch(error)
        {
            next(error);
        }
    }

    public updateTask = async (req:Request, resp:Response, next: NextFunction) => {
        let taskService = new TaskService();
        try
        {
            var task = await taskService.updateTask(req);
            if(task == null){
                resp.status(400).send("Something went wrong");
            }

            resp.status(200).json(task);
        }
        catch(error)
        {
            next(error);
        }
    }

    public deleteTask = async (req:Request, resp:Response, next: NextFunction) => {
        let taskService = new TaskService();
        try
        {
            var task = await taskService.deleteTaskById(req);
            if(task == null){
                resp.status(400).send("Something went wrong");
            }
            resp.status(200).json({task, message:"This task has been deleted succesfully"});
        }
        catch(error)
        {
            next(error);
        }
    }
}

export default TaskController;
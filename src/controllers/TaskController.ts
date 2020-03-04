import express, { Router, Request, Response, NextFunction } from 'express';
import IControllerBase from '../interfaces/IControllerBase';
import TaskService from "../services/TaskService";

class TaskController implements IControllerBase 
{
    public router: Router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() :void {
        console.log("Init routes")
        this.router.get('/', this.getTasks);
        this.router.get('/task/', this.getTasks);
        this.router.post('/create', this.createTask)
        
    }


    public getTasks = async (req:Request, resp:Response, next: NextFunction) =>  {
        console.log("Getting task")
        let taskService = new TaskService();
        try
        {
            var task = await taskService.getAllTasks(req, resp);
            console.log(task);
            resp.json(task);
        }
        catch(error)
        {
            next(error);
        }
    }

    public getTask = async (req:Request, resp:Response, next: NextFunction) =>  {
        console.log("Getting task")
        let taskService = new TaskService();
        try
        {
            var task = await taskService.getTask(req, resp);
            console.log(task);
            resp.json(task);
        }
        catch(error)
        {
            next(error);
        }
    }

    public createTask = async (req:Request, resp:Response, next: NextFunction) => {
        console.log("Creating task")
        let taskService = new TaskService();
        try
        {
            var task = await taskService.createTask(req, resp);
            console.log(task);
            resp.json(task);
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
            var task = await taskService.updateTask(req, resp);
            console.log(task);
            resp.json(task);
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
            var task = await taskService.deleteTask(req, resp);
            console.log(task);
            resp.status(200);
            resp.send(true);
        }
        catch(error)
        {
            next(error);
        }
    }
}

export default TaskController;
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
        this.router.post('/create', this.createTask)
        this.router.get('/task', this.getTask);
    }

    public getTask = async (req:Request, resp:Response, next: NextFunction) =>  {
        let taskService = new TaskService();
        try
        {
            var task = await taskService.getTask(req, resp);
            resp.json(task);
        }
        catch(error)
        {
            next(error);
        }
    }

    public createTask = async (req:Request, resp:Response, next: NextFunction) => {
        let taskService = new TaskService();
        try
        {
            var task = await taskService.createTask(req, resp);
            resp.json(task);
        }
        catch(error)
        {
            next(error);
        }
    }
}

export default TaskController;
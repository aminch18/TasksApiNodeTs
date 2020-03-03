import express, { Router, Request, Response, NextFunction } from 'express';
import IControllerBase from '../interfaces/IControllerBase';
import mongoose from 'mongoose';
import TaskModel from '../models/TaskModel';
import ITaskModel from '../interfaces/ITodoModel';

class TodoController implements IControllerBase 
{
    public router: Router = express.Router();

    public initRoutes() :void {
         this.router.get('/task', this.getTask)

        // this.router.get('/task/:taskId', this.getTaskById);
    }

    private service = () :Promise<any>

    public getTask = async (req:Request, resp:Response, next: NextFunction) =>  {
        try{
            var task = await this.service();
            resp.json(task)
        }
        catch(error){
            //this will eventually be handled by your error handling middleware
              next(error) 
        }
    }

}
import express, { Router, response } from 'express';
import IControllerBase from '../interfaces/IControllerBase';
import mongoose from 'mongoose';
import TaskModel from '../models/TaskModel';
import ITaskModel from '../interfaces/ITodoModel';

class TodoController implements IControllerBase 
{
    public router: Router = express.Router();

    initRoutes() :void {
         this.router.get('/task', this.getTask);
        // this.router.get('/task/:taskId', this.getTaskById);
    }

    public getTask = (req:Request, resp:Response) =>  {
        return new Promise(() => {
            TaskModel.find({}, (response, error):void => {
                if(error) 
                    Promise.reject(error);
                else 
                    Promise.resolve(response);
            });
        }
    }

}
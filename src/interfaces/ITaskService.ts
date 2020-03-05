import ITaskModel from "./ITodoModel";
import { Request, Response } from 'express';

interface ITaskService {
    createTask(req:Request): Promise<ITaskModel>;
    getTask(req: Request, resp:Response) : Promise<ITaskModel | null>;
    getAllTasks(): Promise<ITaskModel[]>;
    updateTask(req: Request): Promise<ITaskModel | null>;
    deleteTaskById(req: Request): Promise<ITaskModel | null>
}

export default ITaskService;
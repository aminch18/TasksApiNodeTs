import ITaskModel from "./ITodoModel";
import { Request, Response } from 'express';
interface ITaskService {
    getTask(req: Request, resp:Response) : Promise<ITaskModel>;
}

export default ITaskService;
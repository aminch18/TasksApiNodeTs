import ITodoService from "../interfaces/ITodoService";
import TaskModel from "../models/TaskModel";

class TodoService implements ITodoService
{
    public getTask = (): Promise<any> => new Promise( (resolve,reject) => 
    {
        TaskModel.find({}, (response, error) => {
            error ? reject(error) : resolve(response);
        });
    })

    public getTasks = (): Promise<any> => new Promise((resolve, reject) => {
        TaskModel.findById({}, (response, error) => {
            error ? reject(error) : resolve(response);
        });
    })


}
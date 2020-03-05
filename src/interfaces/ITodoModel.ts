import {  Document } from 'mongoose';

interface ITaskModel extends Document {
    taskId:string,
    name: string,
    assignedTo:string,
    priority:number
}

export default ITaskModel;
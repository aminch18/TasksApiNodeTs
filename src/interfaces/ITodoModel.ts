import {  Document } from 'mongoose';

interface ITaskModel extends Document {
    name: string,
    assignedTo:string,
    priority:number
}

export default ITaskModel;
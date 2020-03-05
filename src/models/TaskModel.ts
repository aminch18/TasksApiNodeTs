import mongoose, { Schema } from 'mongoose';
import ITaskModel from '../interfaces/ITodoModel';

const TaskSchema :Schema = new Schema({
    taskId: {type:String, required:"Without we can not index this", unique:true},
    name: { type: String},
    assignedTo: { type: String},
    priority: { type: Number},
})

export default mongoose.model<ITaskModel>('Task', TaskSchema);
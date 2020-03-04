import mongoose, { Schema } from 'mongoose';
import ITaskModel from '../interfaces/ITodoModel';

const TaskSchema :Schema = new Schema({
    id: {type:Number, autoIndex: true},
    name: { type: String},
    assignedTo: { type: String},
    priority: { type: Number},
})


export default mongoose.model<ITaskModel>('Task', TaskSchema);
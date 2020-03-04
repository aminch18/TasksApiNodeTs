import mongoose, { Schema } from 'mongoose';
import ITaskModel from '../interfaces/ITodoModel';

const TaskSchema :Schema = new Schema({
    id: {type:Number, required:true, autoIndex: true },
    name: { type: String, required: true, autoIndex: false },
    assignedTo: { type: String, required: true, autoIndex: false },
    priority: { type: Number, required: true, autoIndex: false },
})

export default mongoose.model<ITaskModel>('Task', TaskSchema);
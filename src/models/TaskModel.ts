import mongoose, { Schema } from 'mongoose';
import ITaskModel from '../interfaces/ITodoModel';

const TaskSchema :Schema = new Schema({
    name: { type: String, required: true, unique: true },
    assignedTo: { type: String, required: true, unique: true },
    priority: { type: Number, required: true, unique: true },
})

export default mongoose.model<ITaskModel>('Task', TaskSchema);
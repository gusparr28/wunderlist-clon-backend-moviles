import { Schema, model } from 'mongoose';
const { ObjectId } = Schema.Types;

const taskSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: 'User'
    }
});

export default model('Task', taskSchema);
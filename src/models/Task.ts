import { Schema, model } from 'mongoose';
const { ObjectId } = Schema.Types;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
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
    pinned: {
        type: Boolean,
        default: false
    },
    author: {
        type: ObjectId,
        ref: 'User'
    }
});

export default model('Task', taskSchema);
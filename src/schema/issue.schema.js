import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, required: true},
    title: { type: String, minLength: 2, maxLength: 50, required: true },
    description: { type: String, minLength: 2, maxLength: 100, required: true },
    labels: [ { type: String, required:true } ], 
    author: { type: String, minLength: 2, maxLength: 50, required: true },
}, { timestamps: true });

export default issueSchema; 
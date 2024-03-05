import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: { type: String, minLength: 2, maxLength: 50, required: true },
    description: { type: String, minLength: 2, maxLength: 100, required: true },
    author: { type: String, minLength: 2, maxLength: 50, required: true },
    issues: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Issue'
        }
    ]
}, { timestamps: true });

export default projectSchema; 
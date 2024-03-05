import mongoose from "mongoose";
import projectSchema from "../schema/project.schema.js";

const ProjectModel = mongoose.model("Project", projectSchema);

export default class ProjectRepository {
  async add(project) {
    try {
      const newProject = new ProjectModel(project);
      return await newProject.save();
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      return await ProjectModel.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  }

  async findProjectById(id) {
    try {
      return await ProjectModel.findById(id).populate({
        path: "issues",
        select: "title description labels author"
      });
    } catch {
      throw error;
    }
  }

  async connectIssueToProject(projectId, issueId) {
    try {
      return await ProjectModel.findByIdAndUpdate(projectId, {
        $push: { issues: issueId },
      });
    } catch (error) {
      throw error;
    }
  }
}

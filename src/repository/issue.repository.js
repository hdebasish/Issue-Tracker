import mongoose from "mongoose";
import issueSchema from "../schema/issue.schema.js";

const IssueModel = mongoose.model("Issue", issueSchema);

export default class IssueRepository {
  async add(issue) {
    try {
      const newIssue = new IssueModel(issue);
      return await newIssue.save();
    } catch (error) {
      throw error;
    }
  }
}

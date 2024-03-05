import IssueModel from "../models/issue.model.js";
import ProjectModel from "../models/project.model.js";
import IssueRepository from "../repository/issue.repository.js";
import ProjectRepository from "../repository/project.repository.js";

export default class IssueController {
  constructor() {
    this.projectRepository = new ProjectRepository();
    this.issueRepository = new IssueRepository();
  }

  async getHomePage(req, res, next) {

    try {
      const projects = await this.projectRepository.getAll();
      return res.render("index", {projects: projects});
    } catch (error) {
        next(error);
    }
  }

  async getIssueDetailPage(req, res, next) {
    try {
      
      const id  = req.params.id;

      const  project = await this.projectRepository.findProjectById(id);

      if(!project){
        return  res.render("404");
      }

      return res.render("issue",{project : project, labels : IssueModel.getLabels(project) , authors: IssueModel.getAuthors(project)}) ;

    } catch (error) {
      next(error);
    }
  }

  async getProjectPage(req, res, next) {
    res.render("create-project", {error:null});
  }

  async getIssuePage(req, res, next) {
    const id= req.params.id;

    const  project = await this.projectRepository.findProjectById(id);

    res.render("create-issue", {id:id, labels: IssueModel.getLabels(project), error:null});
  }

  async createProject(req, res, next) {
    try {
      const { name, description, author } = req.body;

      const project = new ProjectModel(name, description, author);

      const result = await this.projectRepository.add(project);

      if(result){
        res.redirect("/");
      }else{
        res.render("create-project", { error: 'Failed to add the project'});
      }


    } catch (error) {
      next(error);
    }
  }

  async createIssue(req, res, next) {
    try {

      const projectId =  req.params.id;

      const  project = await this.projectRepository.findProjectById(projectId);

      const { title, description, labels, author } = req.body;

      const issue = new IssueModel(projectId,title,description,labels,author);

      const createdIssue = await this.issueRepository.add(issue);

      const result =  await this.projectRepository.connectIssueToProject(projectId , createdIssue._id );
    
      if(!result){
        return  res.render("create-issue", { id:projectId, labels: IssueModel.getLabels(project), error: 'Failed to add the issue'});;
      }

      res.redirect("/issue/"+projectId);

    }catch(error){
      next(error);
    }
  }
}

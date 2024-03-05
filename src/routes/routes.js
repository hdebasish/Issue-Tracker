import express from "express";
import IssueController from "../controllers/controller.js";

const issueRouter = express.Router();

const issueController = new IssueController();

issueRouter.get("/", (req, res, next) => {
  issueController.getHomePage(req, res, next);
});

issueRouter.get("/issue/:id", (req, res, next) => {
  issueController.getIssueDetailPage(req, res, next);
});

issueRouter.get("/create-project", (req, res, next) => {
  issueController.getProjectPage(req, res, next);
});

issueRouter.get("/create-issue/:id", (req, res, next) => {
  issueController.getIssuePage(req, res, next);
});

issueRouter.post("/create-project", (req, res, next) => {
  issueController.createProject(req, res, next);
});

issueRouter.post("/create-issue/:id", (req, res, next) => {
  issueController.createIssue(req, res, next);
});

export default issueRouter;

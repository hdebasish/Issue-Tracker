export default class IssueModel {
  constructor(projectId, title, description, labels, author) {
    this.projectId = projectId;
    this.title = title;
    this.description = description;
    this.labels = labels;
    this.author = author;
  }

  static getLabels(project) {
    let labels = [];

    project.issues.forEach((issue) => {
      issue.labels.forEach((label) => {
        if (!labels.includes(label)) {
          labels.push(label);
        }
      });
    });

    return labels;
  }

  static getAuthors(project) {
    let authors = [];

    project.issues.forEach((issue) => {
      if (!authors.includes(issue.author)) {
        authors.push(issue.author);
      }
    });

    return authors;
  }
}

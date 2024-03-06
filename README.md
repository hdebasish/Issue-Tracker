# Issue Tracker

## Documentation

An issue tracker, also known as a bug tracker or project management tool, is software used to manage and track issues or tasks within a project. This project help teams manage and organize their issues and projects effectively. It provides a platform for creating, assigning, retrieving and resolving issues in a collaborative environment.

## Demo

[Issue Tracker](https://issue-tracker-nv69.onrender.com/)

## Authors

- Debasish Halder

## Features

- Home Page
    - Shows a list of projects
    - A button to create a new Project
- Create Project Page
    - Create project with Name, Description, Author
- Project Detail Page
    - When the user clicks on a project (in home page) redirect the user to this page which will show bugs related to this project
    - Filter by multiple labels
    - Filter by author
    - Search by title and description
    - A button to create an issue
- Create issue page
    - User should be able to create an issue for a project
    - Create Issue with Title, Description, Labels (multiple labels can be added to a project, IF a project already has a label it is shown in dropdown as the user types the label in), Author

## Run Locally

Clone the project:

```bash
  git clone https://github.com/hdebasish/Issue-Tracker
```

Go to the project directory:

```bash
  cd Issue-Tracker
```

Install dependencies:

```bash
  npm install
```

Set up environment variables:
  - Create a .env file in the root directory.
  - Define the required environment variables (e.g., database connection string)

Start the development server:

```bash
  node index.js
```

## Screenshots

### Homepage
![image](https://raw.githubusercontent.com/hdebasish/Issue-Tracker/main/public/res/screenshots/home.png)

### Create Project page
![image](https://raw.githubusercontent.com/hdebasish/Issue-Tracker/main/public/res/screenshots/create_project.png)

### Issue Page
![image](https://raw.githubusercontent.com/hdebasish/Issue-Tracker/main/public/res/screenshots/issue.png)

### Create Issue Page
![image](https://raw.githubusercontent.com/hdebasish/Issue-Tracker/main/public/res/screenshots/create_issue.png)

## Feedback

If you have any feedback, please reach out to us at hdebasish@gmail.com

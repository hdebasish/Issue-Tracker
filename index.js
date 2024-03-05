import "./env.js";
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import issueRouter from "./src/routes/routes.js";
import { connectUsingMongoose } from "./src/config/mongoose.config.js";

const app = express();

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(expressEjsLayouts);

// Static files
app.use(express.static("public"));

app.use("/", issueRouter);

// error Handler
app.use((err, req, res, next) => {
    console.log(err);
    if (err) {
      res.status(500).render("500");
    }
  });

  app.use((req, res, next) => {
    res.status(404).render("404");
  });


app.listen(3003, () => {
    console.log("Server is running on port 3003");
    connectUsingMongoose();
});

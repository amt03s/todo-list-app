import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import connect from "./database/mongodb-connect.js";
import router from "./routes/todos.js";
import usersRouter from "./routes/users.js";

const app = express();
const port = 3000;

// get the absolute path of the project root directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, ".."); // Moves up to the root of the project

// connect to MongoDB
connect();

// middleware to parse URL-encoded and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files from 'frontend' directory
app.use(express.static(path.join(projectRoot, "frontend")));

// API route handlers
app.use("/api", router);
app.use("/api", usersRouter);

// route for the home page (index.html)
app.get("/", (req, res) => {
  const filePath = path.join(projectRoot, "frontend", "index.html");
});

// route for the login page
app.get("/login", (req, res) => {
  const filePath = path.join(projectRoot, "frontend", "login.html");
});

// route for the todo list page
app.get("/todo-list", (req, res) => {
  const filePath = path.join(projectRoot, "frontend", "todo-list.html");
});

// route for the edit todo page
app.get("/edit-todo", (req, res) => {
  const filePath = path.join(projectRoot, "frontend", "edit-todo.html");
});

// catch-all route for 404 - only if no other routes match
app.use((req, res) => {
  res.status(404).sendFile(path.join(projectRoot, "frontend", "404.html"));
});

// start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

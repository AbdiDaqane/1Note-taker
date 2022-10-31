const express = require("express");
const staticRouter = require("./routers/staticRouter");
const apiRouter = require("./routers/apiRouter");
const path = require("path");

//Creating Express App
const app = express();

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// critical piece of middleware
app.use(express.static(path.join(__dirname, './Develop/public')));

//Request Info Logging Middleware
app.use((req, res, next) => {
  const { method, path } = req;
  console.log(`[${new Date().toISOString()}]New Request to ${method} ${path}`);
  next();
});

//Routing Middleware
app.use("/", staticRouter);
app.use("/api", apiRouter);

//Listening to port from .env or local 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`***** Server is up on port ${PORT} ****`);
});
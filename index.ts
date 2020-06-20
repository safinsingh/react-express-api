import { Response, Request, Express } from "express";
const express = require("express");
const path = require("path");

const app: Express = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Put all API endpoints under '/api'
app.get("/api/", (req: Request, res: Response) => {
  const data: Object = {
    users: ["bruh", "bruh2"],
  };

  // Return them as json
  res.json(data);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Backend listening on ${port}`);

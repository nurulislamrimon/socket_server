const express = require("express");
const { WebSocketServer } = require("ws");

// express server
const app = express();
// socket server
const wss = new WebSocketServer({ port: 8080 });
const port = 5000;

console.log(wss);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

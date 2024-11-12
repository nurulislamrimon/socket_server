const express = require("express");
const { WebSocketServer } = require("ws");

// express server
const app = express();
// socket server
const wsServer = new WebSocketServer({ server: app });
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");

  // socket controller
  wsServer.on("connection", (ws) => {
    ws.on("message", (data) => {
      console.log("received: %s", data);
      ws.send(`Hello, you sent -> ${data}`);
    });

    ws.on("error", (error) => {
      console.log("error: %s", error);
    });

    ws.on("close", () => {
      console.log("Client disconnected");
    });

    ws.send("Hi there, I am a WebSocket server");
  });
});

// server listener
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const path = require("node:path");
const { Server } = require("socket.io");
const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`🗨️ server running on port:${PORT}`);
});

let connectedSockets = new Set();

const io = new Server(server);
io.on("connection", (socket) => {
  console.log("Socket connected: ", socket.id);
  connectedSockets.add(socket.id);
  io.emit("clients-total", connectedSockets.size);
});

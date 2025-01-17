const express = require("express");
const { Server } = require("socket.io");
const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`🗨️ server running on port:${PORT}`);
});

let connectedSockets = new Set();

const io = new Server(server);

const addClient = (socket) => {
  console.log("Socket connected: ", socket.id);
  connectedSockets.add(socket.id);
  io.emit("clients-total", connectedSockets.size);
};

const removeClient = (socket) => {
  console.log("Socket disconnected: ", socket.id);
  connectedSockets.delete(socket.id);
  io.emit("clients-total", connectedSockets.size);
};

io.on("connection", (socket) => {
  addClient(socket);

  socket.on("disconnect", () => {
    removeClient(socket);
  });

  socket.on("message", (data) => {
    socket.broadcast.emit("chat-message", data);
  });

  socket.on("feedback", (data) => {
    socket.broadcast.emit("feedback", data);
  });
});

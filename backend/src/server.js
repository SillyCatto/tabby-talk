const express = require("express");
const path = require("node:path");

const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`🗨️ server running on port:${PORT}`);
});

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Welcome to the Todo App");
});

server.listen(5000, "127.0.0.1", () => {
  console.log("✅ Server is running on http://localhost:5000");
});

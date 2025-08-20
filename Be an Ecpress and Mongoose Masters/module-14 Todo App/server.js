const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);
  // res.end("Welcome to the Todo App");
  if (req.url === "/todos" && req.method === "GET") {
    // res.end("All Todos");

    //  customize meta data using writeHead function, also can modify status code 200
    res.writeHead(201, {
      "content-type": "text/plain",
      email: "test@email.com",
    });
    res.end("All Todos");
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("Create Todo");
  } else {
    res.end("404 Not Found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("✅ Server is running on http://localhost:5000");
});

// /todos - GET - All Todos
// /todos/create todo - POST - Create Todo

const http = require("http");
// create json testing data
const data = [
  {
    title: "typescript",
    body: "learning mode",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    title: "javascript",
    body: "learning mode",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    title: "nodejs",
    body: "learning mode",
    createdAt: "2023-01-01T00:00:00Z",
  },
];

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);
  // res.end("Welcome to the Todo App");
  if (req.url === "/todos" && req.method === "GET") {
    // res.end("All Todos");

    //  customize meta data (JSON, HTML, IMAGE etc using writeHead function, also can modify status code 200
    // res.writeHead(200, {
    //   "content-type": "application/json",
    // });

    res.writeHead(200, {
      "content-type": "text/html",
    });
    // res.setHeader("Content-Type", "text/plain");
    // res.statusCode = 201;
    // res.end(JSON.stringify(data));
    res.end(`
  
        <h1>Hello world</h1>
        <h2>Hello world</h2>
   
    `);
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

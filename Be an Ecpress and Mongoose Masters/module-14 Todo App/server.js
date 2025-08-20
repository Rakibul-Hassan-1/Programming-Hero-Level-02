const http = require("http");
const path = require("path");
const filePath = path.join(__dirname, "db/todo.json");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath, "utf-8");
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    //basically ekhane previous json datar sathe new json datar concatination kora hoise
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });
    req.on("end", () => {
      console.log("Data received:", data);
      const { title, body } = JSON.parse(data);
      // console.log({ title, body });
      const createdAt = new Date().toLocaleString();
      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parseAllTodos = JSON.parse(allTodos);
      parseAllTodos.push({ title, body, createdAt });
      console.log(allTodos);
      fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), {
        encoding: "utf-8",
      });
      res.end(JSON.stringify({ title, body, createdAt }),null,2);
    });

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

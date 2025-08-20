const http = require("http");
const path = require("path");
const filePath = path.join(__dirname, "db/todo.json");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  // console.log(url, "url");
  const pathname = url.pathname;

  if (pathname === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath, "utf-8");
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else if (pathname === "/todos/create-todo" && req.method === "POST") {
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
      res.end(JSON.stringify({ title, body, createdAt }), null, 2);
    });
    res.end("Create Todo");
  } else if (pathname === "/todo" && req.method === "GET") {
    const title = url.searchParams.get("title");
    // console.log(title);
    const data = fs.readFileSync(filePath, "utf-8");
    const parseData = JSON.parse(data);
    const todo = parseData.find((todo) => todo.title === title);
    const stringifiedTodo = JSON.stringify(todo);

    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(stringifiedTodo);
    // res.end("Single Todo");
    // console.log(req.url, "single todo");
  } else if (pathname === "/todos/update-todo" && req.method === "PATCH") {
    const title = url.searchParams.get("title");
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });
    req.on("end", () => {
      console.log("Data received:", data);
      const { body } = JSON.parse(data);

      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parseAllTodos = JSON.parse(allTodos);

      const todoIndex = parseAllTodos.findIndex((todo) => todo.title === title);
      parseAllTodos[todoIndex].body = body;

      fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), {
        encoding: "utf-8",
      });
      res.end(
        JSON.stringify({
          title,
          body,
          createdAt: parseAllTodos[todoIndex].createdAt,
        }),
        null,
        2
      );
    });
    // res.end("Updated Todo");
  } else if (pathname === "/todos/delete-todo" && req.method === "DELETE") {
    const title = url.searchParams.get("title");

    // Read all todos
    const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parseAllTodos = JSON.parse(allTodos);

    // Find the index of the todo to delete
    const todoIndex = parseAllTodos.findIndex((todo) => todo.title === title);

    if (todoIndex === -1) {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "Todo not found" }));
      return;
    }

    // Remove the todo
    const deletedTodo = parseAllTodos.splice(todoIndex, 1)[0];

    // Save the updated todos
    fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), {
      encoding: "utf-8",
    });

    // Send response
    res.end(
      JSON.stringify({
        message: "Todo deleted successfully",
        todo: deletedTodo,
      })
    );
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Todo not found" }));
  }
  
});

server.listen(5000, "127.0.0.1", () => {
  console.log("✅ Server is running on http://localhost:5000");
});

// /todos - GET - All Todos
// /todos/create todo - POST - Create Todo

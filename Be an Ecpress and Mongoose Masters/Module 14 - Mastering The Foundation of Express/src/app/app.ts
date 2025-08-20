import express, { Application, Request, Response } from "express";
const app: Application = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

/**
 * server => server handleling works like - starting, closing errors of the server. server related works
 * app files => routing handle, middleware handling, route related works
 * app folder => app business logic handling like read update, delete, database related works.
 */

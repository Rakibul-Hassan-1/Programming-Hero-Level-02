import { createBrowserRouter } from "react-router";
import App from "../App";
import Tasks from "../pages/Tasks";
import Users from "../pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Tasks />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
]);

export default router;

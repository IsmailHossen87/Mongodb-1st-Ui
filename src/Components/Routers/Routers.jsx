import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Users from "../Users/Users";
import Update from "../Update/Update";
const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/user",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/update/:id",
    element: <Update></Update>,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
  },
]);

export default Routers;

import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import RootLayout from "./Pages/RootLayout";
import Itens from "./Pages/Itens";
import AllItens from "./Pages/Itens/allItens";
import NewItem from "./Pages/Itens/newItem";
import Item from "./Pages/Itens/Item";
import UpdateItem from "./Pages/Itens/updateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Itens",
        element: <Itens />,
        children: [
          {
            index: true,
            element: <AllItens />,
          },
          {
            path: "newItem",
            element: <NewItem />,
          },
          {
            path: ":itemId",
            element: <Item />,
          },
          {
            path: "update/:itemId",
            element: <UpdateItem />,
          },
        ],
      },
    ],
  },
]);

export default router;

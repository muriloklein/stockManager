import { RouterProvider } from "react-router-dom";
import router from "./Router";
import "./App.sass";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

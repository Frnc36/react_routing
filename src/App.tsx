/* setting>chat.disableAIFeatures>true */
import { createHashRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./pages/Layout";
import Public from "./pages/Public";
import Admin from "./pages/Admin";
import UjTermek from "./pages/UjTermek";
import Kosar from "./pages/Kosar";
import AdottTermek from "./pages/AdottTermek";
import NoPage from "./pages/NoPage";

/* Egy paramétere van a lista, createHashRouter - ha Git pages link kell akkor a createBrowserRouter helyett */
const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      //az index olal a Public oldal legyen, definiálni kell mi legyen az alap odal
      { index: true, element: <Public /> },
      /* { path: "őpublic", element: <Public /> }, */
      { path: "admin", element: <Admin /> },
      { path: "admin/uj-termek", element: <UjTermek /> },
      { path: "kosar", element: <Kosar /> },
      { path: "termek/:id", element: <AdottTermek /> },
      { path: "*", element: <NoPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

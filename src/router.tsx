import { createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Contect } from "./pages/Contect";
import { Before } from "./pages/Before";
import { Explanation } from "./pages/Explanation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, path: `/`, element: <Home /> },
      { path: `*`, element: <NotFound /> },
      { path: `/contect`, element: <Contect /> },
      { path: `/before`, element: <Before /> },
      { path: `/explanation`, element: <Explanation /> },
    ],
  },
]);

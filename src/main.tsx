import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import About from "./pages/about/index.tsx";
import Home from "./pages/home/index.tsx";
import DefaultLayout from "./layout/index.tsx";
import AddBlog from "./pages/add-blog/index.tsx";
import SingleBlog from "./pages/single/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ),
    errorElement: <div>Something wrong...</div>,
  },
  {
    path: "/about",
    element: (
      <DefaultLayout>
        <About />
      </DefaultLayout>
    ),
    errorElement: <div>Something wrong...</div>,
  },
  {
    path: "/add-blog",
    element: (
      <DefaultLayout>
        <AddBlog />
      </DefaultLayout>
    ),
    errorElement: <div>Something wrong...</div>,
  },
  {
    path: "/single",
    element: (
      <DefaultLayout>
        <SingleBlog />
      </DefaultLayout>
    ),
    errorElement: <div>Something wrong...</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

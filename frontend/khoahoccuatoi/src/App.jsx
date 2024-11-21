import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { KhoaHocCuaToi } from "./screens/KhoaHocCuaToi";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <KhoaHocCuaToi />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

import React from "react";
import { Login } from "./View/Sections/Auth/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const loginRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

const queueRouter = createBrowserRouter([
  {
    path: "/queue/:queueId",
    element: <Login />,
  },
]);

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={loginRouter} />
      <RouterProvider router={queueRouter} />
    </React.StrictMode>
  );
};

export default App;

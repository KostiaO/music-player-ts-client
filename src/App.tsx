import React from "react";
import { Login } from "./View/Sections/Auth/Login";

import { Route, Routes } from "react-router-dom";
import Queue from "./View/Sections/Auth/Queue";

const App: React.FC = () => {
  return (
    <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/queue"
          element={<Queue />} 
        />
    </Routes>
  );
};

export default App;

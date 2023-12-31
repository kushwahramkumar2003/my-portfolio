import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/core/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import UserContext from "./components/Context/UserContext.js";

function ProtectedRoute({ children }) {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  return user ? children : navigate("/login", { replace: true });
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      // <ProtectedRoute>
        <Dashboard />
      // </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();

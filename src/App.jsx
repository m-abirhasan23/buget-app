import React from "react";
// rrd imports 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { logoutActions } from "./action/logout";

// layouts 
import Main, { mainLoader } from "./layouts/Main";

// routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

// library
import { ToastContainer } from 'react-toastify';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children:[
      {
        index:true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action:dashboardAction,
        errorElement: <Error />,
      },
      {
      path:"logout",
      action:logoutActions
      
      },
    ]
  },
 
]);
const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  );
};

export default App;

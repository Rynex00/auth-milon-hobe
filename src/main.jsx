import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import AuthProviders from './Providers/AuthProviders';
import Orders from './components/Orders/Orders';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './components/Profile/Profile';
import DashBored from './components/DashBored/DashBored';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/logIn',
        element: <LogIn />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile /> </PrivateRoute>
      },
      {
        path: '/dashBored',
        element: <PrivateRoute> <DashBored /> </PrivateRoute>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)

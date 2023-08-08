import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from './views/Login';
import SignUp from './views/SignUp';
import Users from './views/Users';
import NotFound from './views/NotFound';
import DefaultLayout from "./components/Layouts/DefaultLayout";
import GuestLayout from "./components/Layouts/GuestLayout";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                name: 'Users',
                element: <Navigate to={'/users'} />
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                element: <Dashboard/>
            },
            {
                path: '/users',
                name: 'Users',
                element: <Users/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                name: 'Login',
                element: <Login/>
            },
            {
                path: '/signup',
                name: 'Sign Up',
                element: <SignUp/>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router;
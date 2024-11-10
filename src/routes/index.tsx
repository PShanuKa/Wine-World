import { RouteProps } from "react-router-dom";
import HomePage from "../pages/Home";


export interface IRoute {
    path: string;
    element?: RouteProps['element']
    name: string;
}

const publicRoutes: IRoute[] = [
    {
        path: '/',
        element: <HomePage/>,
        name: 'Home'
    },
];

const authRoutes: IRoute[] = [
    {
        path: '/login',
        element: <>Login Page</>,
        name: 'Login'
    },
];



export { publicRoutes, authRoutes };
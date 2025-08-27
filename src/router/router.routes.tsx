import { createBrowserRouter, type RouteObject } from 'react-router';
import { HomePage, LandingPage, BasePage, ToppingsPage, OrderPage } from '../pages';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: 'base',
        element: <BasePage />,
      },
      {
        path: 'toppings',
        element: <ToppingsPage />,
      },
      {
        path: 'order',
        element: <OrderPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

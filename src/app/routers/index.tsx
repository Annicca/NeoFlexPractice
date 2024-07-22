import { AppRouters, RoutersPath } from "shared/const";
import type { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoanPage, Layout } from "pages";
import { LazyNotFound } from "pages/404";

const childrenRoutes: Record<AppRouters, RouteObject> = {
  [AppRouters.HOME]: {
    path: RoutersPath.home,
    index: true,
    element: <HomePage />,
  },
  [AppRouters.CREDIT_CARD]: {
    path: RoutersPath.creditCard,
    element: <LoanPage />,
  },
  [AppRouters.PRODUCT]: {
    path: RoutersPath.product,
    element: <HomePage />,
  },
  [AppRouters.ACCOUNT]: {
    path: RoutersPath.account,
    element: <HomePage />,
  },
  [AppRouters.RESOURCES]: {
    path: RoutersPath.resources,
    element: <HomePage />,
  },
};

const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: Object.values(childrenRoutes),
    errorElement: <LazyNotFound />
  },
];

export const router = createBrowserRouter(routesConfig);

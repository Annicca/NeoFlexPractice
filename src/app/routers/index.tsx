import { AppRouters, RoutersPath } from "shared/const";
import type { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoanPage, Layout, NotFoundPage, AplicationPage } from "pages";

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
  [AppRouters.APPLICATION]: {
    path: RoutersPath.application,
    element: <AplicationPage />,
  }
};

const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: Object.values(childrenRoutes),
    errorElement: <NotFoundPage />
  },
];

export const router = createBrowserRouter(routesConfig);

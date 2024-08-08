import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routers";
import { Loading } from "../pages";

const App = () => (
  <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
  </Suspense>
);

export default App;

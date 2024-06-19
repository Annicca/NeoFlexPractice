import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routers";

const App = () => (
  // можно добавить компонент загрузки вместо текста Loading
  <Suspense fallback="Loading ...">
    <RouterProvider router={router} />
  </Suspense>
);

export default App;

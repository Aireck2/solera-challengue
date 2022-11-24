import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import { routes } from "./routes";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<>Loading</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

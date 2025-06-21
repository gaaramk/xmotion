import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ExercisesDetails from "./pages/ExercisesDetails";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  // Routes with basename for GitHub Pages
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "contact", element: <Contact /> },
          { path: "about", element: <About /> },
          { path: "exercisesDetails/:id", element: <ExercisesDetails /> },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
    {
      basename: "/xmotion",
    }
  );

  // React Query
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
};

export default App;

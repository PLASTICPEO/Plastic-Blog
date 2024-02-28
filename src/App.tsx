import { Route, Routes } from "react-router-dom";
import { PAGE_PATH } from "./routes/pages/index.enum.ts";
import { ROOT_PATHS } from "./routes/root/index.enum.ts";

import About from "./pages/about/index.tsx";
import Home from "./pages/home/index.tsx";
import DefaultLayout from "./layout/index.tsx";
import AddBlog from "./pages/add-blog/index.tsx";
import SingleBlog from "./pages/single/index.tsx";
import ProtectedRoute from "./protectRouter/index.tsx";
import CategoriesPage from "./pages/categories/index.tsx";
import UserPage from "./pages/user-page/index.tsx";
import BlogsFlow from "./components/home/blogsFlow/index.tsx";
import BlogerPage from "./pages/blogerPage/index.tsx";

const App = () => {
  return (
    <Routes>
      <Route
        path={ROOT_PATHS.ROOT}
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route
        path={PAGE_PATH.BLOGSFLOW}
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      >
        <Route
          path={PAGE_PATH.BLOGSFLOW}
          element={
            <DefaultLayout>
              <BlogsFlow />
            </DefaultLayout>
          }
        />
      </Route>

      <Route
        path={PAGE_PATH.ABOUT}
        element={
          <DefaultLayout>
            <About />
          </DefaultLayout>
        }
      />
      <Route
        path={PAGE_PATH.BLOGERPAGE}
        element={
          <DefaultLayout>
            <BlogerPage />
          </DefaultLayout>
        }
      />
      <Route
        path={PAGE_PATH.ADD_BLOG}
        element={
          <DefaultLayout>
            <ProtectedRoute>
              <AddBlog />
            </ProtectedRoute>
          </DefaultLayout>
        }
      />
      <Route
        path={PAGE_PATH.SINGLE}
        element={
          <DefaultLayout>
            <SingleBlog />
          </DefaultLayout>
        }
      />

      <Route
        path={PAGE_PATH.CATEGORIES}
        element={
          <DefaultLayout>
            <CategoriesPage />
          </DefaultLayout>
        }
      />
      <Route
        path={PAGE_PATH.USERPAGE}
        element={
          <DefaultLayout>
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default App;

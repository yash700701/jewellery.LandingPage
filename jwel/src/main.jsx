import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NecklaceItems from "./NecklaceItemsPage.jsx";
import Layout from "./videos/Layout.jsx";
import ProductPage from "./ProductPage.jsx";
import Cart from "./Cart.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "necklaces",
    element: <NecklaceItems />,
  },
  {
    path: "/necklaces/:slug",
    element: <ProductPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>
);

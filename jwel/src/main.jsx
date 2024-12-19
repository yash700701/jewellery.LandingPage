import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NecklaceItems from './NecklaceItemsPage.jsx'
import Layout from './videos/Layout.jsx'
import ProductPage from './ProductPage.jsx'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  },
  {
    path: "necklaces",
    element: <NecklaceItems/>,
  },
  {
    path: "/necklaces/:slug",
    element: <ProductPage/>,
},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
          <RouterProvider router={Router}/>
     </Provider>
  </StrictMode>,
)

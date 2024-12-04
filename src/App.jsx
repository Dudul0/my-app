import { Product } from './components/FlashSale/FlashSale.jsx'
import { Header } from './components/Layouts/Header.jsx'
import HomePage from './components/Pages/HomePage.jsx'
import ProductList from './components/Pages/ProductList.jsx'
import { Footer } from './components/Layouts/Footer.jsx'
import SuperFlashSale from './components/Pages/SuperFlashSale.jsx'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'

const router  = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Header />
        <Outlet />
      <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:'/productList',
        element: <ProductList />,
      },
      {
        path:'/superFashSale',
        element: <SuperFlashSale />,
      },    ]
  }
])

export default function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

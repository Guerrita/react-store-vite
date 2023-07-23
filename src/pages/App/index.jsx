import { useRoutes, BrowserRouter } from "react-router-dom"
import Home from "../home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import SignIn from "../SignIn"
import NotFound from "../NotFound"

import Navbar from "../../components/Navbar"
import ShopingCartProvider from "../../Context"
import CheckoutSideMenu from "../../components/CheckoutSideMenu"

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/my-account",
      element: <MyAccount />
    },
    {
      path: "/my-order",
      element: <MyOrder />
    },
    {
      path: "/my-orders",
      element: <MyOrders />
    },
    {
      path: "/sign-in",
      element: <SignIn />
    },
    {
      path: "/*",
      element: <NotFound />
    },

  ])
  return routes
}

const App = () => {
  return (
    <ShopingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShopingCartProvider>
  )
}

export default App

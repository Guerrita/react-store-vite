import { createContext, useState } from 'react'

export const ShopingCartContext = createContext()

const ShopingCartProvider = ({ children }) => {
  //*Shopping cart Increment quantity
  const [count, setCount] = useState(0)

  //**Product Detail . Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  //**Checkout side menu . Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  //*product detail show product 
  const [productToShow, setProductToShow] = useState({})

  //Shoppping cart Add Products to cart
  const [cartProducts, setCartProducts] = useState([])
  return (

    <ShopingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      isCheckoutSideMenuOpen,
      setProductToShow,
      productToShow,
      cartProducts,
      setCartProducts,
    }}>
      {children}
    </ShopingCartContext.Provider>
  )
}

export default ShopingCartProvider
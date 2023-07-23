import { useContext, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShopingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'

import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShopingCartContext)

  const handleDelete = (id) =>{
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }
  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed  right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>
          My Order
        </h2>
        <XMarkIcon
          className='w-6 h-6 cursor-pointer'
          onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
      </div>
      <div className='px-6 overflow-y-scroll'>

      {
        context.cartProducts?.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete = {handleDelete}
          />
        ))
      }
      </div>
      <div className='px-6'>
        <p>
          <span>Total:</span>
          <span>${totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
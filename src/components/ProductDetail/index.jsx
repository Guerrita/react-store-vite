import { useContext, useState } from 'react'
import { XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

import './styles.css'
const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  const [image, setImage] = useState(0)

  const nextImage = () => {
    if(image===context.productToShow.images.length-1) {
      setImage(0)
    }else {
      setImage(image+1)
    }
  }



  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed  right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>
          Detail
        </h2>
        <XMarkIcon
          className='w-6 h-6 cursor-pointer'
          onClick={() => context.closeProductDetail()}></XMarkIcon>
      </div>
      <figure className='px-6 relative'>
        <img
          className='w-full h-full rounded-lg'
          src={context.productToShow.images ? context.productToShow.images[image] : ""}
          alt={context.productToShow.title} />
        <ChevronRightIcon
          className={`${context.productToShow.images?.lenght===1? 'hidden' : '' }w-8 h-8 fill-white cursor-pointer right-5 center-element`}
          onClick={() => nextImage()}
        ></ChevronRightIcon>
      </figure>
      <div className='flex flex-col p-6'>
        <div className='flex justify-between items-center '>
          <span className='font-medium text-lg'>{context.productToShow.title}</span>
          <span className='font-medium text-2xl'>${context.productToShow.price}</span>
        </div>
        <span className='text-md'>{context.productToShow.description}</span>
      </div>
    </aside>
  )
}

export default ProductDetail
import { ChevronRightIcon, CalendarDaysIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center my-3 border border-black w-72 rounded-xl px-5 py-2">
      <div>
        <div className='flex items-center gap-2'>
          <CalendarDaysIcon
            className='w-6 h-6 text-black cursor-pointer' />
          <p>01.02.23</p>
        </div>
        <div className='flex items-center gap-2'>
          <ShoppingCartIcon
            className='w-6 h-6 text-black cursor-pointer' />
          <p>{totalProducts} Articles</p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-2xl font'>${totalPrice}</p>
        <ChevronRightIcon
          className='w-6 h-6 text-black cursor-pointer' />
      </div>
    </div>
  )
}

export default OrdersCard
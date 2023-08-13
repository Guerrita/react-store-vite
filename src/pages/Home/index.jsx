import { useContext } from 'react'

import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from '../../Context'

function Home() {

  const context = useContext(ShoppingCartContext)

  const renderView = () => {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card data={item} key={item.id} />
          ))
        )
      }else {
        return (
          <div>
            No se encontraron productos
          </div>
        )
      }
    }
  
  return (
    <>
      <Layout>
        <div className="flex w-80 relative justify-center items-center">
          <h1>Home</h1>
        </div>
        <input
          type="text"
          placeholder='Search a product'
          className='rounded-lg border-2 w-80 p-5 mb-4 focus:outline-none'
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        ></input>
        <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            renderView()
          }
        </section>
        <ProductDetail />
      </Layout>
    </>
  )
}

export default Home

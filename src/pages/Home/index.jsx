
import axios from "axios"
import { useState, useEffect } from "react"
import Card from "../../components/Card"
import Layout from "../../components/Layout"
import ProductDetail from "../../components/ProductDetail"

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    // fetch('https://api.escuelajs.co/api/v1/products')
    //   .then(response => console.log(response.json()))
    //   .then(data => console.log(data))
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

  }, [])

  return (
    <>
      <Layout>
        <h1>Home</h1>
        <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item => (
            <Card data={item} key={item.id} />
            ))
        }
        </section>
        <ProductDetail/>
      </Layout>
    </>
  )
}

export default Home

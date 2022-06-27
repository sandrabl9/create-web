import React, { useState, useEffect} from 'react'
import { ProductCard } from './Productcard'

export const Products = () => {
  const [products,setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState()
  const [currentPage, setCurrentePage] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'https://create-web-e8e99-default-rtdb.firebaseio.com/products.json'
      );
      if (!response.ok) {
        throw new Error('Error inesperado!')
      }

      const responseData = await response.json()

      const loadedProducts = []

      for (const key in responseData) {
        loadedProducts.push({
          id: responseData[key].id,
          name: responseData[key].name,
          description: responseData[key].description,
          imgUrl: responseData[key].imgUrl,
          price: responseData[key].price
          
        })
      }
      
      setProducts(loadedProducts)
      setIsLoading(false)
    }
    
      fetchProducts().catch(error => {
      setIsLoading(false);
      // setHttpError(error.message);
      setHttpError('Error al cargar las productos')
    })
   
  }, [])

  if (isLoading) {
    return ( <section>
      <p>Cargando...</p>
    </section>
    )
  }

  if (httpError) {
    return (
      <section >
      <p>{httpError}</p>
    </section>
    )

  }

  const productsSlice = products.slice(currentPage, currentPage + 3)

  const productList = productsSlice.map(prod => <ProductCard
    key={prod.id} 
    id={prod.id}
    name={prod.name} 
    description={prod.description} 
    imgUrl={prod.imgUrl}
    price={prod.price}
    />
  );

  const nextPage = () => {
    setCurrentePage(currentPage + 3)
  }

  const prevPage = () => {
    if(currentPage > 0)
    setCurrentePage(currentPage - 3)
  }

    
  return (
    <>
    <div>{productList}</div>
    <button onClick={ nextPage }>Siguientes</button>
    <button onClick={ prevPage }>Anteriores</button>
    </>
    
  )
}

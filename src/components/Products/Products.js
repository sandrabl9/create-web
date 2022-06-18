import React, { useState, useEffect} from 'react'
import { ProductCard } from './Productcard'

export const Products = () => {
  const [products,setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState()

  useEffect(() => {
    const fetchCollections = async () => {
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
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          imgUrl: responseData[key].imgUrl,
          price: responseData[key].price
          
        })
      }
      
      setProducts(loadedProducts)
      setIsLoading(false)
    }
    
      fetchCollections().catch(error => {
      setIsLoading(false);
      // setHttpError(error.message);
      setHttpError('Error al cargar las colecciones')
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

  const productList = products.map(col => <ProductCard
    key={col.id} 
    id={col.id}
    name={col.name} 
    description={col.description} 
    imgUrl={col.imgUrl}
    price={col.price}
    />
    );
  return (
    <div>{productList}</div>
  )
}

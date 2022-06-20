import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router'
import queryString from 'query-string'
import { useForm } from '../../Hooks/useForm'
import { ProductCard } from '../Products/Productcard'
import { getProductsByName } from '../../helpers/getProductsByName'

export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [products,setProducts] = useState([])

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
              id: key,
              name: responseData[key].name,
              description: responseData[key].description,
              imgUrl: responseData[key].imgUrl,
              price: responseData[key].price
              
            })
          }
          
          setProducts(loadedProducts)
         
        }
        fetchProducts()  
       
    }, [])

    
    const { q = '' } = queryString.parse( location.search )


    // const getProductsByName = ( q = '' ) => {

    //     q = q.toLocaleLowerCase().trim();
    
    //     if(q.length === 0) return [];
    
    
    //     return products.filter(
    //         product => product.name.toLocaleLowerCase().includes( q )
    //     )
    
    // }

    const productsSearch = getProductsByName(products, q);

    const {searchText, onInputChange, onResetForm} = useForm( {
        searchText: ''
    })

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if(searchText.trim().length <= 1) return;

        navigate(`/?q=${searchText.toLowerCase()}`)

        onResetForm()
     }

  return (
    <div>
        <form onSubmit={onSearchSubmit}>
            <input
            type='text'
            name='searchText'
            placeholder='Buscar'
            autoComplete='off'
            value={searchText}
            onChange={onInputChange}
            >
            </input>
            <button>Buscar</button>
        </form>

        {
            productsSearch.map( product => (
                <ProductCard key={product.id} {...product}/>
            ))
        }

    </div>
  )
}

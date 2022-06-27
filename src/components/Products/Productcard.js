import React from 'react'
import { Container, Image, List, Text } from './ProductCardStyle'

export const ProductCard = ({ name, description, imgUrl, price }) => {



  return (
    
      <List>
      <Container>
        <Image>
          <img src={imgUrl} alt={`product${name}`}/>
        </Image>
        <Text>
          <h3>{name}</h3>
          <span>{price} €</span>
          {/* <p>{description}</p> */}
          <button>Añadir al carrito</button>
          <br />
          <button>Ver</button>
        </Text>  
      </Container>
    </List>

    
  )
}

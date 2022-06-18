import React from 'react'
import { Container, Image, List, Text } from '../Collections/CardCollectionStyle'
import { Wrapper } from '../Collections/CollectionsStyle'


export const ProductCard = ({ name, description, imgUrl, price }) => {



  return (
    
      <List>
        <Wrapper>
      <Container>
        <Image>
          <img src={imgUrl} alt={`collection${name}`}/>
        </Image>
        <Text>
          <h3>{name}</h3>
          <span>{price}</span>
          <p>{description}</p>
          <button>Añadir al carrito</button>
        </Text>  
      </Container>
      </Wrapper>
    </List>
    
    
  )
}

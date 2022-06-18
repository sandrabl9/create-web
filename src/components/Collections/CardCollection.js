import React from 'react'
import { Container, Image, List, Text } from './CardCollectionStyle'
import { Wrapper } from './CollectionsStyle'


export const CardCollection = ({ name, description, img, date }) => {



  return (
    
      <List>
        <Wrapper>
      <Container>
        <Image>
          <img src={img} alt={`collection${name}`}/>
        </Image>
        <Text>
          <h3>{name}</h3>
          <span>{date}</span>
          <p>{description}</p>
          <button>Descubrir</button>
        </Text>  
      </Container>
      </Wrapper>
    </List>
    
    
  )
}

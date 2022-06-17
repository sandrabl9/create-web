import React from 'react'
import { Container, Image, List } from './CardCollectionStyle'
import { Wrapper } from './CollectionsStyle'


export const CardCollection = ({ name, description, img }) => {



  return (
    
      <List>
        <Wrapper>
      <Container>
        <Image>
          <img src={img} alt={`collection${name}`}/>
        </Image>
        <h3>{name}</h3>
        <div>{description}</div>
        
      </Container>
      </Wrapper>
    </List>
    
    
  )
}

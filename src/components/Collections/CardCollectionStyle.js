import styled from 'styled-components'
import { device } from '../../style/media';

export const List = styled.li`
list-style: none;
`;

export const Container = styled.div`
border: 2px solid #000;
border-radius: 5px;
width: 70%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px 0;

@media ${device.tablet} {
  flex-direction: row;
}

`;

export const Image = styled.div`
display: flex;
justify-content: center;
align-items: center;
img {
    width: 90%;
    border-radius: 5px;  
}
`
export const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 0 10px;
`
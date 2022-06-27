import styled from 'styled-components'


export const List = styled.li`
list-style: none;
display: inline-flex;
margin: 0 15px;
`;

export const Container = styled.div`
border: 2px solid #000;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px 0;
width: 200px ;
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
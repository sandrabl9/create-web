import styled from 'styled-components'

export const Title = styled.h3`
    color: #00f;
    margin-bottom: 20px;

`;

export const Input = styled.input`
    background-color: #eee;
    color: #777;
    border: 0;
    border-bottom: 1px solid #777;
    font-size: 16px;
    margin-bottom: 20px;
    padding: 0;
    height: 20px;
    width: 100%;

    transition: border-bottom .2 ease;

    &:focus {
        border-bottom: 2px solid #777;
        outline: none;

    }

`;
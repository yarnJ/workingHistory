import styled from "styled-components";

export const CartDropdownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 88px;
right: 0;
z-index: 5;
`

export const CartItemContainer = styled.div`
height: 285px;
display: flex;
flex-direction: column;
overflow-y: scroll;
`
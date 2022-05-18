import styled from "styled-components"

export const Button = styled.button<{backgroundColor:string}>`
  display: block;
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  outline: none;
  cursor:pointer;
`;
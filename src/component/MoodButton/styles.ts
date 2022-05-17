import styled from "styled-components"

export const Button = styled.button<{backgroundColor:string}>`
  margin-left: 20px;
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  outline: none;
  cursor:pointer;
`;
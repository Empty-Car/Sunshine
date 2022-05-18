import styled from "styled-components";

export const Form = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const Nav = styled.section`
  display: flex;
  justify-content: center;;
  margin-bottom: 20px;
`;

export const Year = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const Days = styled.div`
  display: flex;

`;

export const Day = styled.div`
  width: calc(100% / 7);
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  padding: 10px;


  border: 1px solid #c4c4c4;
`;

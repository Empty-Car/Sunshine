import styled, {css} from "styled-components";

export const Form = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 1200px) {
    width: 70%;
  }
`;

export const Nav = styled.section`
  display: flex;
  justify-content: center;;
  margin-bottom: 20px;
`;

export const Year = styled.div`
  font-size: 28px;
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

interface DayPropsType {
  isSat: boolean
  isSun: boolean;
}

export const Day = styled.div<DayPropsType>`
  width: calc(100% / 7);
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  background-color: #2b323b;
  padding: 10px;
  color: white;

  ${props => props.isSat && css`
    color: #A166FF;
  `}

  ${props => props.isSun && css`
    color: #FF4181;
  `}


  border: 3px solid #0D1117;
`;

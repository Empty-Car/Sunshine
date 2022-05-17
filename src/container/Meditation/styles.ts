import styled, {css} from "styled-components";

export const MeditationBox = styled.section`
padding-top: 60px;
`;

export const CenterBox = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const PlusMinusButtonBox = styled.div`
  margin-top: 50px;
`;

export const PlusMinusButton = styled.button<{color:string}>`
cursor: pointer;
display: inline-block;
vertical-align: middle;
flex-wrap: wrap;
color: ${(props) => props.color};
background-color: #0D1117;
border: none;
outline: none;
font-size: 40px;
margin-left: 30px;
margin-right: 30px;
`;

export const LightLetter = styled.div`
  color: #c4c4c4;
  height: 30px;
  font-size: 20px;
  text-align: center;
`;

export const DisplayMeditationTime = styled.div`
width: 216;
height: 121;
font-size: 100px;
color: white;
`;

export const ActiveButton = styled.button`
  background-color: #6CAE3E;
  color: white;
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: bold;
  width: 540px;
  height: 60px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 150px;
  `;
  
  /* ${(props) =>
    /* props.isStart && */
    /* css`
      position: absolute;
      left: 50%;
      bottom: 100px;
      transform: translate(-50%, 50%);
      & .hovered {
        display: none;
      }
      &:hover {
        & .not-hover {
          display: none;
        }
        & .hovered {
          display: unset;
        }
      }
    `} */ 

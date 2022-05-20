import styled, {css} from "styled-components";

export const MeditationBox = styled.section`
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

export const LightLetter = styled.div<{narration?:boolean}>`
  color: #c4c4c4;
  height: 30px;
  font-size: 20px;
  text-align: center;
  ${(props) =>
    props.narration &&
    css`
      margin-top: 30px;
    `}
`;

export const NarrationText = styled.div`
  width: 600px;
  height: 50px;
  font-size: 40px;
  text-align: center;
  font-weight: 600px;
  color: white;
`;

export const DisplayMeditationTime = styled.div`
width: 216;
height: 121;
font-size: 100px;
color: white;
`;

interface ActiveButtonPropsType {
  backgroundColor: string;
  isStart?: boolean
}

export const ActiveButton = styled.button<ActiveButtonPropsType>`
  background-color: ${props => props.backgroundColor};
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
  ${(props) =>
    props.isStart &&
      css`
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
    `} 
  `;
  

interface BreathCirclePropsType {
  color: string;
  width: string;
  height: string;
}

export const BreathCircle = styled.div<BreathCirclePropsType>`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
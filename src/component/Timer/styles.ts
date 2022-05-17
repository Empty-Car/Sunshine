import styled, {css} from "styled-components"

export const TimerBox = styled.div<{narration:boolean}>`
  font-size: 100px;
  font-weight: 600px;
  margin-bottom: 40px;
  color: white;
  ${(props) =>
    !props.narration &&
    css`
      font-size: 30px;
      margin-bottom: 0px;
    `}
`;
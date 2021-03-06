
import styled, { css } from "styled-components";

export const Form = styled.div`
width: calc(100% / 7);
height: 90px  ;
padding-top: 5px;
text-align: left;
font-size: 20;
font-weight: 600px;
background-color: #161B22;

border: 3px solid #0D1117;
border-radius: 10px;
box-sizing: border-box;
cursor: pointer;
`;

interface DateStylePropsType {
  isPrev: boolean;
  isNext: boolean;
  isToday: boolean;
}

export const DateStyle = styled.span<DateStylePropsType>`
padding: 10px 1px 1px 10px;
font-weight: bold;
color: white;

${props => props.isToday && css`color :#6CAE3E;`}

${(props) =>
  props.isPrev &&
  css`
    color: #828282;
  `}

${(props) =>
  props.isNext &&
  css`
    color: #828282;
  `}
`;

export const TodayMoodColor = styled.div<{backgroundColor:string}>`
  width: 30px;
  height: 30px;

  background-color: ${props => props.backgroundColor}
`
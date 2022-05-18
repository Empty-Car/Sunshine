import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 700px;
  height: 60%;
  padding: 16px;
  background-color: #161B22;
  border-radius: 10px;
`;

export const CloseButton = styled.div`
  text-align: right;
`;

export const TextBox = styled.div`
  margin-left: 30px;
  height: 80%;
`;

export const TitleInput = styled.input`
  outline: none;
  border: none;
  width: 80%;
  font-size: 35px;
  font-weight: 600;
  background-color: #161B22;
  color: white;
`;

export const DisplayDate = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

export const SelectMood = styled.div`
  margin-top: 10px;
  font-weight: 600px;
  font-size: 15px;

  display: flex;
  display: flex;
  align-items: center;
`;

export const MoodSelectBox = styled.div`
  height: 30px;
  display: flex;
  column-gap: 20px;
  margin-left: 30px; 
`;

export const DiaryInput = styled.textarea`
  outline: none;
  width: 80%;
  height: 50%;
  resize: none;
  border: none;
  margin-top: 10px;
  font-size: 20px;
  padding: 10px;
  background-color: #161B22;
  color: white;

 font-family: 'Spoqa Han Sans Neo', 'sans-serif';


  &:focus {
    border-left: 1px solid white;
  }
`;

export const TodayMoodColor = styled.div`
  margin-left: 30px
`

export const Description = styled.div`
  color: white;
  font-size: 13px;
`

export const Line = styled.div`
  margin-top: 15px;
  width: 80%;
  border: 1px solid white;
`

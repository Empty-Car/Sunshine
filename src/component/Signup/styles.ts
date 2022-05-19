import styled from "styled-components";

export const InputBox = styled.div`
  border: 1px solid #21262D;
  background-color: #161B22;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
`

export const InputStyle = styled.input`
  padding: 12px;
  border: 2px solid #30363D;
  outline: none;
  width: 400px;
  height: 40px;
  font-size: 18px;
  box-sizing: border-box;
  margin-top: 10px;
  background-color: #0D1117;
  color: white;
  border-radius: 10px;

  &:focus {
    outline: none;
    border: 2px solid white; 
  }

  &:valid {
    color: white;
  }

  &:invalid {
    color: red;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ActiveButton = styled.button`
  width: 400px;
  height: 35px;
  border: none;
  background-color: white;
  color: black;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 30px;
`;

export const LabelStyle = styled.label`
  font-size: 12px;
  color: white;
`
export const LabelInputStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
  margin-bottom: 7px;
`

export const BacktoLoginButton = styled.div`
  margin-top: 35px;
  font-size: 11px;
  color: #58A6FF;
  border: none;
  outline: none;
  background-color: #161B22;
  cursor: pointer;
`
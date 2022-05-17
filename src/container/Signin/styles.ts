import styled from "styled-components"

export const CneterDiv = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputStyle = styled.input`
  padding: 12px;
  border: 1px solid #30363D;
  outline: none;
  width: 400px;
  font-size: 18px;
  box-sizing: border-box;
  margin-top: 10px;
  background-color: #0D1117;
  color: white;
  border-radius: 10px;

  &:focus {
    outline: none;
    border: 2px solid #417B2B; 
  }
`;

export const LabelStyle = styled.label`
  font-size: 12px;
  color: white;
`

export const LabelInputStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  margin-bottom: 6px;
`

export const InputLoginBox = styled.div`
  border: 1px solid #21262D;
  background-color: #161B22;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`

export const LoginButton = styled.button`
  width: 400px;
  height: 40px;
  border: none;
  background-color: #8957E5;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 15px;
  margin-top: 30px;
`;

export const SignupButtonBox = styled.div`
  margin-top: 60px;
  width: 300px;
  height: 50px;
  border: 2px solid #30363D;
  background-color: #0D1117;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 10px;

  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SignupButton = styled.button`
  margin-left: 15px;
  font-size: 12px;
  color: #58A6FF;
  border: none;
  outline: none;
  background-color: #0D1117;
  cursor: pointer;
`
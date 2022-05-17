import styled from "styled-components";
import { ReactComponent as Logo } from "../../asset/logo/logo.svg";
import { ReactComponent as Profile } from "../../asset/img/profile.svg";

export const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 1rem;
  background: #0D1117;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 3px gray;
  z-index: 1;
`;

export const LogoStyle = styled(Logo)`
  width: 109px;
  height: 41px;
  margin-left:50px;
`;

export const ProfileStyle = styled(Profile)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const NavigationButtonBox = styled.div`
  align-items: flex-end;
  margin-right: 50px;
  display:flex;
  justify-content: center;
  align-items: center;
`

export const NavigateButton = styled.button`
  cursor: pointer;
  width: 80px;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  background-color: #0D1117;
  color: white;

`;
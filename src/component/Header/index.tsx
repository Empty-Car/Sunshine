import * as S from './styles'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { TokenInstance } from '../../axios'
import { useRecoilState } from 'recoil'
import { isTokenState } from '../../recoil'

const Header = () => {
  const [isToken, setIsToken] = useRecoilState<boolean>(isTokenState)

  useEffect(() => {
    const checkToken = async () => {
      try {
        const user_id = localStorage.getItem("user_id") 

        await TokenInstance.get(`/v1/user/${user_id}`)
        setIsToken(true)
      } catch(err) {
        setIsToken(false)
      }
    }
    checkToken()
  }, [setIsToken])

  return (
    <S.HeaderBox>
      <NavLink to="/">
      <S.LogoStyle/>
      </NavLink>

      <S.NavigationButtonBox>
      {isToken ? <S.ProfileStyle></S.ProfileStyle> 
      : <NavLink to="signin" style={
        ({isActive}) => (
          isActive ? { borderBottom: "3px solid white" }:{})}>
        <S.NavigateButton>로그인</S.NavigateButton>
      </NavLink>}

      <NavLink to="calm" style={
        ({isActive}) => (
          isActive ? { borderBottom: "3px solid white" }:{})}>
        <S.NavigateButton>호흡 진정</S.NavigateButton>
      </NavLink>

      <NavLink to="record-emotion" style={
        ({isActive}) => (
          isActive ? { borderBottom: "3px solid white" }:{})}>
        <S.NavigateButton>감정일기</S.NavigateButton>
      </NavLink>

     <NavLink to="centers" style={
       ({isActive}) => (
         isActive ? { borderBottom: "3px solid white" }:{})}>
       <S.NavigateButton>센터</S.NavigateButton>
     </NavLink>
      </S.NavigationButtonBox>
    </S.HeaderBox>
  )
}

export default Header
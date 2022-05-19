import * as S from './styles'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { TokenInstance } from '../../axios'


const Header = () => {
  const [isToken, setIsToken] = useState<boolean>(false)

  useEffect(() => {
    const user_id = localStorage.getItem("user_id") 

    const checkToken = async () => {
      try {
        await TokenInstance.get(`/v1/user/${user_id}`)
        setIsToken(true)
      } catch(err) {
        setIsToken(false)
      }
    }
    checkToken()
  }, [])

  return (
    <S.HeaderBox>
      <NavLink to="/">
      <S.LogoStyle/>
      </NavLink>

      <S.NavigationButtonBox>
      {isToken ? <S.ProfileStyle></S.ProfileStyle> : <NavLink to="signin" style={
        ({isActive}) => (
          isActive ? { borderBottom: "3px solid white" }:{})}>
        <S.NavigateButton>로그인</S.NavigateButton>
      </NavLink>}

      <NavLink to="meditation" style={
        ({isActive}) => (
          isActive ? { borderBottom: "3px solid white" }:{})}>
        <S.NavigateButton>명상</S.NavigateButton>
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
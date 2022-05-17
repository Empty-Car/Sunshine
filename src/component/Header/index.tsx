import * as S from './styles'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isToken, setIsToken] = useState<boolean>(false)
  const [forceRerendering, setForeceRerendering] = useState<number>(0)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token === null) {
      setIsToken(true)
    }
  }, [])

  return (
    <S.HeaderBox>
      <NavLink to="/">
      <S.LogoStyle/>
      </NavLink>

      <S.NavigationButtonBox>
      {isToken ? <NavLink to="signin" style={
        ({isActive}) => (
          isActive ? { borderBottom: "3px solid white" }:{})}>
        <S.NavigateButton>로그인</S.NavigateButton>
      </NavLink> : <S.ProfileStyle></S.ProfileStyle>}
      

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
import * as S from "./styles"
import { TokenInstance } from "../../axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const MainContainer = () => {  
  const navigate = useNavigate()
  const [error, setError] = useState<any>(null)
  const [name, setName] = useState<string>("")

  useEffect(() => {
    const userId = localStorage.getItem("user_id")
    

    const request = async () => {
      try {
        setError(null)
        const res = await TokenInstance.get(`/v1/user/${userId}`)
        setName(res.data.name)
      } catch(err) {
        setError(err)
      }
    }
    request()
  },[])

  return (
    <div>
      {name.length===0 ? <S.Div>안녕하세요</S.Div> : <S.Div>{name}님, 안녕하세요</S.Div>}
    </div>
    
  ) 
}

export default MainContainer
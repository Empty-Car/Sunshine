import * as S from "./styles"
import { TokenInstance } from "../../axios"
import { useEffect, useState } from "react"

const MainContainer = () => {  
  const [name, setName] = useState<string>("")

  useEffect(() => {
    const userId = localStorage.getItem("user_id")
    
    const request = async () => {
      try {
        const res = await TokenInstance.get(`/v1/user/${userId}`)
        setName(res.data.name)
      } catch(err) {
        alert(err)
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
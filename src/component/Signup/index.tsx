import { useState } from "react";
import { Instance } from "../../axios";
import * as S from "./styles"

interface SignupPropsType {
  setIsSignup: (active: boolean) => void
}

const Signup = ({setIsSignup}: SignupPropsType) => {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
  });
  const { email, name, password } = inputs;
  const [error, setError] = useState<any>(null)

  const onSetHandler = (e:React.FormEvent<HTMLInputElement>) => {
      const name = e.currentTarget.name;
      setInputs({ ...inputs, [name]: e.currentTarget.value });
  };

  const onButtonClick = () => {
    try {
      setError(null);
      const res = Instance.post("/v1/user", {
        email: email,
        name: name,
        password: password
      })
      setIsSignup(false)

    } catch(err) {
      setError(err)
    }
  }

  return (
    <S.DontCover>
      <div>
        Email <S.InputStyle value={email} name="email" onChange={onSetHandler}/>
      </div>
      <div>
        Name <S.InputStyle value={name} name="name" onChange={onSetHandler}/>
      </div>
      <div>
        Password <S.InputStyle value={password} name="password" onChange={onSetHandler} type="password"/>
      </div>
      <div>
        <S.ActiveButton onClick={onButtonClick}>로그인하러가기</S.ActiveButton>
      </div>
    </S.DontCover>
  )
}

export default Signup


















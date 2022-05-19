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

  const [loading, setLoading] = useState<boolean>(false)

  const onSetHandler = (e:React.FormEvent<HTMLInputElement>) => {
      const name = e.currentTarget.name;
      setInputs({ ...inputs, [name]: e.currentTarget.value });
  };

  const onButtonClick = async () => {
    try {
      setLoading(true)

      const res = await Instance.post("/v1/user", {
        email: email,
        name: name,
        password: password
      })
      setIsSignup(false)

    } catch(err) {
      alert(err)
    }

    setLoading(false)
  }

  return (
    <div>
      <S.InputBox>
      <S.LabelInputStyle>
      <S.LabelStyle>Email address</S.LabelStyle>
         <S.InputStyle value={email} name="email" onChange={onSetHandler} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
      </S.LabelInputStyle>
      <S.LabelInputStyle>
      <S.LabelStyle>Nickname</S.LabelStyle>
         <S.InputStyle value={name} name="name" onChange={onSetHandler} />
      </S.LabelInputStyle>
      <S.LabelInputStyle>
      <S.LabelStyle>Password</S.LabelStyle>
         <S.InputStyle value={password} name="password" onChange={onSetHandler} type="password" maxLength={12}/>
      </S.LabelInputStyle>
      <S.ButtonBox>
        <S.ActiveButton onClick={onButtonClick} disabled={loading}>회원가입하기</S.ActiveButton>
        <S.BacktoLoginButton onClick={() => setIsSignup(false)}>로그인으로 돌아가기</S.BacktoLoginButton>
      </S.ButtonBox>
      </S.InputBox>
      
    </div>
  )
}

export default Signup


















import { useState } from "react";
import { Instance } from "../../axios";
import * as S from "./styles"
import {toast} from "react-toastify"
import {EMAILREGEX, PASSWORDREGEX} from "../../constant"

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

  const [corrEmail, setCorrEmail] = useState<boolean>(false)
  const [corrPassword, setCorrPassword] = useState<boolean>(false)

  const onSetHandler = (e:React.FormEvent<HTMLInputElement>) => {
      const name = e.currentTarget.name;
      const value = e.currentTarget.value
      setInputs({ ...inputs, [name]: value });

      switch(name) {
        case "email":
          setCorrEmail(EMAILREGEX.test(value))
          break
        case "password":
          setCorrPassword(PASSWORDREGEX.test(value))
          break
      }  
  };

  const onButtonClick = async () => {
    try {
      setLoading(true)

      await Instance.post("/v1/user", {
        email: email,
        name: name,
        password: password
      })
      setIsSignup(false)
      toast.success("회원가입 완료!", {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT
      })
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
         <S.InputStyle value={email} name="email" onChange={onSetHandler} isCorrect={corrEmail}/>
         <div>
           {corrEmail || <S.WrongInput>잘못된 이메일 형식입니다.</S.WrongInput>}
         </div>
      </S.LabelInputStyle>
      <S.LabelInputStyle>
      <S.LabelStyle>Nickname</S.LabelStyle>
         <S.InputStyle value={name} name="name" onChange={onSetHandler} maxLength={10} isCorrect={true}/>
      </S.LabelInputStyle>
      <S.LabelInputStyle>
      <S.LabelStyle>Password</S.LabelStyle>
         <S.InputStyle value={password} name="password" onChange={onSetHandler} type="password" isCorrect={corrPassword}/>
         <div>
           {corrEmail || <S.WrongInput>잘못된 비밀번호 형식입니다.(8글자 이상, 특수문자, 숫자 포함)</S.WrongInput>}
         </div>
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


















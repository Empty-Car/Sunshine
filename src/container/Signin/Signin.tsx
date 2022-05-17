import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles"

const SigninContainer = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const [error, setError] = useState<any>(null)

  const navigate = useNavigate();

  const onSetHandler = (e:React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    setInputs({ ...inputs, [name]: e.currentTarget.value });
  };

  const onButtonClick = async () => {
    try {
      setError(null);
      const res = await 

    } catch(err) {
      setError(err)
    }
  }

  navigate("main")


  return (
    <S.SignupDiv>
    <div>
      <S.InputStyle value={email} name="email" onChange={onSetHandler} placeholder="이메일 입력" />
    </div>
    <div>
      <S.InputStyle value={password} type="password" name="password" placeholder="비밀번호 입력" onChange={onSetHandler}/>
    </div>
    <S.ActiveButton onClick={}/>
    </S.SignupDiv>
  ) 
}

export default SigninContainer
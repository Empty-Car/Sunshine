import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Instance } from "../../axios";
import Signup from "../../component/Signup";
import * as S from "./styles"

const SigninContainer = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const [error, setError] = useState<any>(null)
  const [isSignup, setIsSignup] = useState<boolean>(false)

  const navigate = useNavigate();

  const onSetHandler = (e:React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    setInputs({ ...inputs, [name]: e.currentTarget.value });
  };

  const onButtonClick = async () => {
    try {
      setError(null);
      const res = await Instance.post("/v1/user/token", {
        email: email,
        password: password,
      })
      navigate("main")

      const resData = res.data;
      localStorage.setItem("token", resData.token)
      localStorage.setItem("user_id", resData.user_id)

    } catch(err) {
      setError(err)
    }
  }

  return (
    <S.DontCover>
      {isSignup ? (
        <Signup setIsSignup={setIsSignup}/>
      ) :        <div>
      <div>
      <S.InputStyle value={email} name="email" onChange={onSetHandler} placeholder="이메일 입력" />
    </div>
    <div>
      <S.InputStyle value={password} type="password" name="password" placeholder="비밀번호 입력" onChange={onSetHandler}/>
    </div>
    <S.ActiveButton onClick={onButtonClick}>로그인하기</S.ActiveButton>
    <S.ActiveButton onClick={() => setIsSignup(true)}>회원가입하기</S.ActiveButton>
    </div>}
    
    </S.DontCover>
  ) 
}

export default SigninContainer
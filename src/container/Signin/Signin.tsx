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

  const [isSignup, setIsSignup] = useState<boolean>(false)

  const navigate = useNavigate();

  const onSetHandler = (e:React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    setInputs({ ...inputs, [name]: e.currentTarget.value });
  };

  const onButtonClick = async () => {
    try {
      const res = await Instance.post("/v1/user/token", {
        email: email,
        password: password,
      })
      navigate("main")

      const resData = res.data;
      localStorage.setItem("token", resData.token)
      localStorage.setItem("user_id", resData.user_id)

    } catch(err) {
      alert(err)
    }
  }

  return (
    <div>
      <S.CneterDiv>
      {isSignup ? (
        <Signup setIsSignup={setIsSignup}/>
        ) :        
      <div>
        <S.InputLoginBox>
          <S.LabelInputStyle>
            <S.LabelStyle>Email address</S.LabelStyle>
            <S.InputStyle value={email} name="email" onChange={onSetHandler}  />
          </S.LabelInputStyle>
          <S.LabelInputStyle>
            <S.LabelStyle>Password</S.LabelStyle>
            <S.InputStyle value={password} type="password" name="password" onChange={onSetHandler}/>
          </S.LabelInputStyle>
          <S.LoginButton onClick={onButtonClick}>로그인하기</S.LoginButton>
        </S.InputLoginBox>
        <S.ButtonBox>
          <S.SignupButtonBox>빈차가 처음이신가요?
          <S.SignupButton onClick={() => setIsSignup(true)}>회원가입하기</S.SignupButton>
          </S.SignupButtonBox>
        </S.ButtonBox>
      </div>}
      </S.CneterDiv>
    
    </div>
  ) 
}

export default SigninContainer
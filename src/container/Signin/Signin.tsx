import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SigninContainer = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const navigate = useNavigate();

  
  navigate("main")


  return <div>Signin</div>
}

export default SigninContainer
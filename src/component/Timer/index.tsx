import * as S from "./styles"
import { useState, useEffect } from "react";

interface TimerPropsType {
  m: string;
  s: string;
  narration: boolean;
}

const Timer = ({ m, s, narration }: TimerPropsType) => {
  const [min, setMin] = useState<number>(parseInt(m));
  const [sec, setSec] = useState<number>(parseInt(s));

  const padNumber = (num:number) => {
    return String(num).padStart(2, "0");
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1);
      }
      if (sec === 0) {
        if (min === 0) {
          clearInterval(countdown);
        } else {
          setMin(min - 1);
          setSec(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [min, sec]);

  return (
    <S.TimerBox narration={narration}>
      {narration ? (
        <div>{sec}</div>
      ) : (
        <div>
          {padNumber(min)}:{padNumber(sec)}
        </div>
      )}
    </S.TimerBox>
  );
};

export default Timer;
import { useState, useEffect } from "react"
import * as S from "./styles"
import Timer from "../../component/Timer";
import gsap from "gsap";

const term = 5000;
const minuteToMillisec = (time: number): number => {
  return time * 60000;
};

const MeditationContainer = () => {
  const [time, setTime] = useState<number>(1);
  const [isStart, setIsStart] = useState<boolean>(false)
  const [narration, setNarration] = useState<boolean>(true)

  const [meditationTimeout, setMeditationTimeout] = useState<any>(null);
  const [narrationTimeout, setNarrationTimeout] = useState<any>(null);

  const onClickStart = () => {
    setIsStart(true);

    setMeditationTimeout(
      setTimeout(() => {
        onClickStop();
      }, minuteToMillisec(time) + term + 3000)
    );
  };

  const onClickStop = () => {
    setIsStart(false);
    gsap.killTweensOf("*");
    setNarration(true);
    clearTimeout(narrationTimeout);
    clearTimeout(meditationTimeout);
  };

  const breath = (max:number, min:number, name:string) => {
    const intro = () => {
      gsap.to(name, {
        scale: max,
        duration: 4.3,
        onComplete: () => {
          outro();
        },
      });
    };

    const outro = () => {
      gsap.to(name, {
        scale: min,
        duration: 4.7,
        onComplete: () => {
          intro();
        },
      });
    };

    intro();
  };

  useEffect(() => {
    if (!isStart) return;

    setNarrationTimeout(
      setTimeout(() => {
        setNarration(false);

        setTimeout(() => {
          breath(1.6, 1.1, ".ani");
          breath(1.4, 0.9, ".ani1");
          breath(1.2, 0.7, ".ani2");
        }, 10);
      }, term)
    );
  }, [isStart]);

  return (
    <S.MeditationBox>
      {!isStart && (
        <S.CenterBox>
          <S.DisplayMeditationTime>{time}:00</S.DisplayMeditationTime>
          <S.LightLetter>명상 시간은 최소 1분에서 최대 10분입니다.</S.LightLetter>
          <S.PlusMinusButtonBox>
            <S.PlusMinusButton 
              onClick={time >= 10 ? undefined : () => {setTime(time => time+1)}}
              color="#6CAE3E">
              +1:00
            </S.PlusMinusButton>
            <S.PlusMinusButton 
              onClick={time <= 1 ? undefined : () => {setTime(time => time-1)}}
              color="#858585">
              -1:00
            </S.PlusMinusButton>
          </S.PlusMinusButtonBox>
          <S.ActiveButton onClick={onClickStart} backgroundColor="#6CAE3E">명상시작</S.ActiveButton>
        </S.CenterBox>
      )}
      {isStart && (
        <div>
          {narration ? (
            <S.CenterBox>
              <Timer m="0" s={String(term / 1000)} narration={narration}></Timer>
              <S.NarrationText>몸의 긴장을 해소시켜봐요! </S.NarrationText>
              <S.LightLetter narration={narration}>
                원이 커질 때 숨을 들이마시고, 작아질 때 숨을 내쉬어봐요
              </S.LightLetter>
              <S.ActiveButton onClick={onClickStop} backgroundColor="#6CAE3E">
                다음에 명상하기
              </S.ActiveButton>
            </S.CenterBox>
          ) : (
            <S.CenterBox>
              <S.BreathCircle className="ani" color="white" width="300px" height="300px"/>
              <S.BreathCircle className="ani1" color="black" width="250px" height="250px"/>
              <S.BreathCircle className="ani2" color="#6CAE3E" width="200px" height="200px"/>
              <S.ActiveButton onClick={onClickStop} backgroundColor="#6CAE3E" isStart={isStart}>
                <span className="not-hover">
                  <Timer m={String(time)} s="0" narration={narration}></Timer>
                </span>
                <span className="hovered">명상 그만하기</span>
              </S.ActiveButton>
            </S.CenterBox>
          )}
        </div>
      )}

    </S.MeditationBox>
  )
}

export default MeditationContainer
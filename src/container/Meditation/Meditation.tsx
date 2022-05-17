import { useState } from "react"
import * as S from "./styles"

const MeditationContainer = () => {
  const [time, setTime] = useState<number>(1);
  const [isStart, setIsStart] = useState<boolean>(false)
  const [narration, setNarration] = useState<boolean>(true)

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
          <S.ActiveButton>명상시작</S.ActiveButton>
          
        </S.CenterBox>
      )}
      {isStart && (
        <div></div>
      )}

    </S.MeditationBox>
  )
}

export default MeditationContainer
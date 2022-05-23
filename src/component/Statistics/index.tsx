import { LineChart } from "../LineChart"
import * as S from "./styles"
import depressionExperienceRate from "../../asset/chartData/depression_experience_rate.json"

const Statistics = () => {
  return (
    <S.StatisticsBox>
      <S.Title>우울감 경험률</S.Title>
      <S.Description>최근 1년 동안 연속적으로 2주 이상 일상생활에 지장이 있을 정도의 우울감(슬픔이나 절망감 등)을 경험한 사람의 분율(%)</S.Description>

      <S.Card>
        <S.PlotTitleBox>
          <S.PlotTitle>연별 추이</S.PlotTitle>
        </S.PlotTitleBox>
        <S.ChartBox>
          <LineChart data={depressionExperienceRate}/>
        </S.ChartBox>
      </S.Card>
    </S.StatisticsBox>
  )
}

export default Statistics
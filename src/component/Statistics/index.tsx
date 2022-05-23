import { LineChart } from "../LineChart"
import { BarChart } from "../BarChart"
import * as S from "./styles"
import lineChartData from "../../asset/chartData/line_chart.json"
import OECDData from "../../asset/chartData/country_data.json"


const Statistics = () => {
  return (
    <S.StatisticsBox>

      <S.Card>
      <S.Title>우울감 의사진단경험률</S.Title>
      <S.Description>의사로부터 우울증을 진단받은 적이 있는 분율(%)</S.Description>
        <S.PlotTitleBox>
          <S.PlotTitle>연별 추이</S.PlotTitle>
        </S.PlotTitleBox>
        <S.ChartBox>
          <LineChart data={lineChartData}/>
        </S.ChartBox>
      </S.Card>

      <S.Card>
      <S.Title>우울증 유병률</S.Title>
      <S.Description>OECD 우울증 유병률 통계(%)</S.Description>
        <S.PlotTitleBox>
          <S.PlotTitle>국가별 우울증 유병률(2020)</S.PlotTitle>
        </S.PlotTitleBox>
        <S.ChartBox>
          <BarChart data={OECDData}/>
        </S.ChartBox>

        {/* <S.PlotTitleBox>
          <S.PlotTitle>국가별 우울증 유병률(2020)</S.PlotTitle>
        </S.PlotTitleBox>
        <S.ChartBox>
          <BarChart data={OECDData}/>
        </S.ChartBox> */}
      </S.Card>
    </S.StatisticsBox>
  )
}

export default Statistics
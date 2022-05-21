import * as S from "./styles"

const Statistics = () => {
  return (
    <S.StatisticsBox>
      <S.YearlyTrend>
        <g>
          <S.YAxisText x="24" y="14" textAnchor="end">8%</S.YAxisText>
          <S.YAxisText x="24" y="91" textAnchor="end">6%</S.YAxisText>
          <S.YAxisText x="24" y="167" textAnchor="end">4%</S.YAxisText>
        </g>
        <g>
          <S.XAxisText x="71" y="182" textAnchor="middle">2015년</S.XAxisText>
          <S.XAxisText x="223.5" y="182" textAnchor="middle">2016년</S.XAxisText>
          <S.XAxisText x="376" y="182" textAnchor="middle">2017년</S.XAxisText>
          <S.XAxisText x="528.5" y="182" textAnchor="middle">2018년</S.XAxisText>
          <S.XAxisText x="681" y="182" textAnchor="middle">2019년</S.XAxisText>
          <S.XAxisText x="844" y="182" textAnchor="middle">2020년</S.XAxisText>
        </g>
        <g aria-hidden="true">
          <path stroke="white" strokeWidth="1" d="M 39 9.5 L 876 9.5"></path>
          <path stroke="white" strokeWidth="1" d="M 39 87.5 L 876 87.5"></path>
          <path stroke="white" strokeWidth="1" d="M 39 163.5 L 876 163.5"></path>
        </g>
      </S.YearlyTrend>
    </S.StatisticsBox>
  )
}

export default Statistics
import { DepressionExpRate } from "../DepressionExpRate"
import * as S from "./styles"
import depressionExperienceRate from "../../asset/chartData/depression_experience_rate.json"

const Statistics = () => {
  return (
    <S.StatisticsBox>
      <div style={{ width: 800, height: 300 }}>
        {/* <DepressionExpRate data={data}/> */}
        <DepressionExpRate data={depressionExperienceRate}/>
      </div>
    </S.StatisticsBox>
  )
}

export default Statistics
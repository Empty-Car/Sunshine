import Dates from "../Dates";
import * as S from "./styles"

interface CalBodyPropsType {
  totalDate: number[];
  year: number;
  month: number;
  today: number;
  prevLength: number;
  thisLength: number;
}

const CalBody = ({ totalDate, year, month, today, prevLength, thisLength }: CalBodyPropsType) => {
  const todayMonth = new Date().getMonth() + 1;
  const todayYear = new Date().getFullYear();

  const copyTotalDate = [...totalDate];
  for (let i = 0; i < prevLength; i++) {
    copyTotalDate.shift();
  }

  const todayIdx = copyTotalDate.indexOf(today) + prevLength;
  const nextMonthIdx = prevLength + thisLength;

  return (
    <S.Form>
      {totalDate.map((date, idx) => {
        return (
          <Dates
            key={idx}
            date={date}
            month={month}
            year={year}
            isToday={
              todayIdx === idx &&
              todayMonth === month &&
              todayYear === year &&
              todayIdx > prevLength
            }
            isPrev={idx < prevLength}
            isNext={idx >= nextMonthIdx}
            today={today}
          ></Dates>
        );
      })}
    </S.Form>
  );
};

export default CalBody;
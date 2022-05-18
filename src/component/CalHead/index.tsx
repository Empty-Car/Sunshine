import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import * as S from "./styles"

const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

interface CalHeadPropsType {
  year: number;
  month: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>
  setYear: React.Dispatch<React.SetStateAction<number>>
}

const CalHead = ({ year, month, setMonth, setYear }: CalHeadPropsType) => {
  const onNextMonth = () => {
    setMonth((month) => month + 1);

    if (month >= 12) {
      setMonth(1);
      setYear((year) => year + 1);
    }
  };

  const onPrevMonth = () => {
    setMonth((month) => month - 1);

    if (month <= 1) {
      setMonth(12);
      setYear((year) => year - 1);
    }
  };

  return (
    <S.Form>
      <S.Nav>
        <S.Year>
          <MdKeyboardArrowLeft onClick={onPrevMonth} size={32} style={{color: "white"}}/>
          {year}년 {month}월
          <MdKeyboardArrowRight onClick={onNextMonth} size={32} style={{color: "white"}}/>
        </S.Year>
      </S.Nav>
      <S.Days>
        {DAY.map((day, idx) => {
          return <S.Day key={idx} isSat={day==="SAT"} isSun={day==="SUN"}>{day}</S.Day>;
        })}
      </S.Days>
    </S.Form>
  );
};

export default CalHead;
import { useEffect, useState } from "react";
import CalBody from "../../component/CalBody";
import CalHead from "../../component/CalHead";
import * as S from "./styles"
import { useNavigate } from "react-router-dom";
import { TokenInstance } from "../../axios";


const EmotionDiary = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<any>(false)
  
  useEffect(() => {
    const tokenCheck = async () => {
      const user_id = localStorage.getItem("user_id")
      try {
        setError(null)

        await TokenInstance.get(`/v1/user/${user_id}`)
      } catch(err) {
        setError(err)
      }
    }
    tokenCheck()
    if (error) {alert("로그인 하고 일기를 작성해주세요"); navigate("/signin")}
    
  }, [error, navigate])

  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;

  const [month, setMonth] = useState<number>(MONTH);
  const [year, setYear] = useState<number>(YEAR);
  const [totalDate, setTotalDate] = useState<number[]>([]);

  const [lenPrevMonth, setLenPrevMonth] = useState(0);
  const [lenThisMonth, setLenThisMonth] = useState(0);

  const today:number = new Date().getDate();


  const changeDate = (month:number) => {
    let prevMonthLastDate = new Date(YEAR, month - 1, 0).getDate();
    let prevMonthLastDay = new Date(YEAR, month - 1, 0).getDay();

    const thisMonthLastDate = new Date(YEAR, month, 0).getDate();
    const thisMonthLastDay = new Date(YEAR, month, 0).getDay();

    let prevMonthDateArr = [];
    if (prevMonthLastDay !== 6) {
      for (let i = 0; i < prevMonthLastDay + 1; i++) {
        prevMonthDateArr.unshift(prevMonthLastDate - i);
      }
    }

    let nextMonthDateArr = [];
    if (thisMonthLastDay !== 6) {
      for (let i = 1; i < 7 - thisMonthLastDay; i++) {
        nextMonthDateArr.push(i);
      }
    }

    let thisMonthDateArr = [];
    thisMonthDateArr = [...Array(thisMonthLastDate + 1).keys()].slice(1);

    setLenPrevMonth(prevMonthDateArr.length);
    setLenThisMonth(thisMonthDateArr.length);

    return prevMonthDateArr.concat(thisMonthDateArr, nextMonthDateArr);
  };

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);

  return (
    <S.CalendarBody className="hihihi">
    <S.Calendar>
      <CalHead
        year={year}
        month={month}
        setMonth={setMonth}
        setYear={setYear}
      ></CalHead>
      <CalBody
        totalDate={totalDate}
        year={year}
        month={month}
        today={today}
        prevLength={lenPrevMonth}
        thisLength={lenThisMonth}
      ></CalBody>
    </S.Calendar>
    </S.CalendarBody>
  );
};

export default EmotionDiary;
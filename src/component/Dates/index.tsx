import { useEffect, useState } from "react";
import DiaryModal from "../DiaryModal";
import { TokenInstance } from "../../axios";
import * as S from "./styles"

export const dateToString = (date:string) => {
  const d = new Date(date);

  return `${d.getFullYear()}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
};

interface DatesPropsType {
  date: number;
  month: number;
  year: number;
  isToday: boolean;
  isPrev: boolean;
  isNext: boolean
}

interface nameDataType {
  title: string;
  mood: string;
  diary: string
}

const Dates = ({ date, month, year, isToday, isPrev, isNext }:DatesPropsType) => {
  const [isModal, setIsModal] = useState(false);
  const [nameData, setNameData] = useState<nameDataType>({title:"", mood:"", diary:""});

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const onLoadDiary = async () => {
    openModal();

    const userId = localStorage.getItem("user_id");
    const res = await TokenInstance.get(
      `/v1/todo/${dateToString(`${year}-${month}-${date}`)}/user/${userId}`
    );

    const resData = res.data;
    console.log(resData[resData.length - 1].name);
    
    if (resData.length === 0) {
      alert("작성된 일기가 없어요")
      return
    }
    setNameData(JSON.parse(resData[resData.length - 1].name));
      
  };
  return (
    <>
    <S.Form onClick={onLoadDiary}>
      <div>
        <S.DateStyle isPrev={isPrev} isNext={isNext}>
          {date}
          {isToday ? <S.TodayStyle /> : null}
        </S.DateStyle>
      </div>
        
    </S.Form>
    <div>
      <DiaryModal
          isModal={isModal}
          closeModal={closeModal}
          year={year}
          month={isPrev ? month - 1 : month && isNext ? month + 1 : month}
          date={date}
          nameData={nameData}
        />
    </div>
    </>
  );
};

export default Dates;
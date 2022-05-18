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
  today: number;
}

interface nameDataType {
  title: string;
  mood: string;
  diary: string
}

const Dates = ({ date, month, year, isToday, isPrev, isNext, today }:DatesPropsType) => {
  const [isModal, setIsModal] = useState(false);
  const [nameData, setNameData] = useState<nameDataType>({title:"", mood:"", diary:""});

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  useEffect(() => {
    console.log(today);
    
  }, [today])

  const onLoadDiary = async () => {
    if (date > today || isNext) {
      alert("미래의 감정은 기록할 수 없어요")
      return
    }

    openModal();

    const userId = localStorage.getItem("user_id");
    const res = await TokenInstance.get(
      `/v1/todo/${dateToString(`${year}-${month}-${date}`)}/user/${userId}`
    );

    const resData = res.data;    
    setNameData(JSON.parse(resData[resData.length - 1].name));
      
  };
  return (
    <>
    <S.Form onClick={onLoadDiary}>
      <div>
        <S.DateStyle isPrev={isPrev} isNext={isNext} isToday={isToday}>
          {date}
        </S.DateStyle>
      </div>
    </S.Form>
      <DiaryModal
          isModal={isModal}
          closeModal={closeModal}
          year={year}
          month={isPrev ? month - 1 : month && isNext ? month + 1 : month}
          date={date}
          nameData={nameData}
        />
    </>
  );
};

export default Dates;
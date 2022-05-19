import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { TokenInstance } from "../../axios";
import * as S from "./styles";
import MoodButton from "../MoodButton";
import { dateToString } from "../Dates";
import {BUTTONCOLORS} from "../../constant"


interface DiaryModalPropsType {
  isModal: boolean;
  year: number;
  month: number;
  date: number;
  nameData: any;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>

}

const DiaryModal = ({ isModal, setIsModal, year, month, date, nameData }: DiaryModalPropsType) => {
  const [isMoods, setIsMoods] = useState(false);
  const { title, mood, diary }:{title:string, mood:string, diary:string} = nameData || { title: "", mood: "", diary: "" };

  const [name, setName] = useState({
    title: title,
    mood: mood,
    diary: diary,
  });

  const onMoodChange = (color: string) => {
    setName({ ...name, mood: color });
    setIsMoods(false);
  };

  const onDiarySave = async () => {
    setIsModal(false)

    const res = await TokenInstance.post("/v1/todo", {
      name: JSON.stringify(name),
      date: dateToString(`${year}-${month}-${date}`),
    });

    console.log(res);
  };

  useEffect(() => {
    setName({
      mood: nameData.mood,
      title: nameData.title,
      diary: nameData.diary,
    });
  }, [nameData]);

  return (
    <div>
      {isModal ? (
        <S.Background>
          <S.ModalContainer>
            <S.CloseButton>
              <MdClose onClick={onDiarySave} size={35} style={{color:"white"}}></MdClose>
            </S.CloseButton>
            <S.TextBox>
                <S.TitleInput
                  placeholder="제목 입력"
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setName({ ...name, [e.target.name]: e.target.value });
                  }}
                  name="title"
                  value={name.title}
                ></S.TitleInput>
                <S.DisplayDate>
                  {year}년 {month}월 {date}일
                </S.DisplayDate>
              <S.SelectMood>
                <S.Description>오늘의 기분은 어떤 색이었나요?</S.Description>
                {isMoods ? (
                  <S.MoodSelectBox>
                    {BUTTONCOLORS.map((ele, idx) => (
                      <MoodButton
                        key={idx}
                        backgroundColor={ele.color}
                        name={ele.color}
                        onClick={() => onMoodChange(ele.color)}
                      />
                    ))}
                  </S.MoodSelectBox>
                ):(
                <S.TodayMoodColor>
                  <MoodButton backgroundColor={name.mood} onClick={() => setIsMoods(true)}></MoodButton>
                </S.TodayMoodColor>
              )}
              </S.SelectMood>
              {/* <div>-----------------------------------</div> */}
              <S.Line />
               <S.DiaryInput
                  placeholder="오늘 하루를 정리해봐요"
                  onChange={(e) => {
                    setName({ ...name, [e.target.name]: e.target.value });
                  }}
                  name="diary"
                  value={name.diary}
                ></S.DiaryInput>
            </S.TextBox>
          </S.ModalContainer>
        </S.Background>
      ) : null}
    </div>
  );
};

export default DiaryModal;
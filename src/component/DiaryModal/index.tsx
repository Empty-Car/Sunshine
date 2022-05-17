import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { Instance } from "../../axios";
import * as S from "./styles";
import MoodButton from "../MoodButton";
import { dateToString } from "../Dates";

const buttonColors = [
  { color: "black", text: "선택안함" },
  { color: "#BDBDBD", text: "최악" },
  { color: "#D3CCA4", text: "별로" },
  { color: "#FDD692", text: "보통" },
  { color: "#F8A6A6", text: "좋음" },
  { color: "#FF7473", text: "최고" },
];

interface DiaryModalPropsType {
  isModal: boolean;
  closeModal: () => void
  year: number;
  month: number;
  date: number;
  nameData: any;
}

const DiaryModal = ({ isModal, closeModal, year, month, date, nameData }: DiaryModalPropsType) => {
  useEffect(() => {
    console.log(nameData);
    
  })

  const [isMoods, setIsMoods] = useState(false);
  const { title, mood, diary }:{title:string, mood:string, diary:string} = nameData || { title: "", mood: "", diary: "" };
  const [colorMood, setColorMood] = useState("gray");

  const [name, setName] = useState({
    title: title,
    mood: mood,
    diary: diary,
  });

  useEffect(() => {
    setName({
      mood: name.mood,
      title: name.title,
      diary: name.diary,
    });
    
  }, [nameData]);

  const onMoodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.name;
    setColorMood(color);
    setIsMoods(false);
    setName({ ...name, mood: color });
  };

  const onDiarySave = async () => {
    const res = await Instance.post("/v1/todo", {
      name: JSON.stringify(name),
      date: dateToString(`${year}-${month}-${date}`),
    });
  };

  return (
    <div>
      {isModal ? (
        <S.Background>
          <S.ModalContainer>
            <S.CloseButton>
              <MdClose onClick={closeModal} size={35}></MdClose>
            </S.CloseButton>
            <S.TextBox>
              <div>
                <S.TitleInput
                  placeholder="제목 입력"
                  onChange={(e) => {
                    setName({ ...name, [e.target.name]: e.target.value });
                  }}
                  name="title"
                  value={name.title}
                ></S.TitleInput>
              </div>
              <div>
                <S.DisplayDate>
                  {year}년 {month}월 {date}일
                </S.DisplayDate>
              </div>
              <S.SelectMood>
                <div>오늘의 기분은 어떤 색이었나요? :</div>

                <MoodButton
                  onClick={() => setIsMoods(true)}
                  backgroundColor={colorMood}
                ></MoodButton>
                {isMoods && (
                  <S.MoodSelectBox>
                    <div>
                      <S.Bounding />
                    </div>
                    {buttonColors.map((ele) => (
                      <MoodButton
                        backgroundColor={ele.color}
                        name={ele.color}
                        text={ele.text}
                        onClick={() => onMoodChange}
                      />
                    ))}
                  </S.MoodSelectBox>
                )}
              </S.SelectMood>
              <div>
                <S.DiaryInput
                  placeholder="오늘 하루를 정리해봐요"
                  onChange={(e) => {
                    setName({ ...name, [e.target.name]: e.target.value });
                  }}
                  name="diary"
                  value={name.diary}
                ></S.DiaryInput>
              </div>
            </S.TextBox>
            <S.SaveButton onClick={onDiarySave}>저장하기</S.SaveButton>
          </S.ModalContainer>
        </S.Background>
      ) : null}
    </div>
  );
};

export default DiaryModal;
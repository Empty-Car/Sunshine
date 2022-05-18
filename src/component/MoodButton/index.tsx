import * as S from "./styles"

interface MoodButtonType {
  backgroundColor: string;
  name?: string;
  onClick: () => void;

}

const MoodButton = ({backgroundColor, name, onClick}: MoodButtonType) => {
  return (
    <S.Button backgroundColor={backgroundColor} name={name} onClick={onClick} />
  )
}

export default MoodButton
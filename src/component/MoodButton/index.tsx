import * as S from "./styles"

interface MoodButtonType {
  text?: string;
  backgroundColor: string;
  name?: string;
  onClick?: () => void;
}

const MoodButton = ({text, backgroundColor, name, onClick}: MoodButtonType) => {
  return (
    <S.Button backgroundColor={backgroundColor} name={name} onClick={onClick}>{text}</S.Button>
  )
}

export default MoodButton
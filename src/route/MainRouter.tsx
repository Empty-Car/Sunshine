import { Routes, Route } from "react-router-dom";
import {
  MainContainer,
  SigninContainer,
  MeditationContainer,
  CentersListContainer,
  EmotionDiaryContainer,
} from "../container";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<SubRouter />} />
    </Routes>
  );
};

const SubRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainContainer />}></Route>
        <Route path="/signin" element={<SigninContainer />}></Route>
        <Route path="/meditation" element={<MeditationContainer />}></Route>
        <Route
          path="/record-emotion"
          element={<EmotionDiaryContainer />}
        ></Route>
        <Route path="/centers" element={<CentersListContainer />}></Route>
      </Routes>
    </>
  );
};

export default MainRouter;
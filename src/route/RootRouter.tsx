import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import Header from "../component/Header";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainRouter />
    </BrowserRouter>
  );
};

export default RootRouter;
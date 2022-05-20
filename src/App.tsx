import GlobalStyle from "./globalStyle";
import RootRouter from "./route/RootRouter";
import {ToastContainer} from 'react-toastify'
import { RecoilRoot } from "recoil";
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <RootRouter />
        <GlobalStyle />
        <ToastContainer />
      </RecoilRoot>
    </div>
  );
};

export default App;
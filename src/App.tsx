import GlobalStyle from "./globalStyle";
import RootRouter from "./route/RootRouter";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <RootRouter />
      <GlobalStyle />
      <ToastContainer />
    </div>
  );
};

export default App;
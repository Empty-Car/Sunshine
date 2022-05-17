import GlobalStyle from "./globalStyle";
import RootRouter from "./route/RootRouter";

const App = () => {
  return (
    <div>
      <RootRouter />
      <GlobalStyle />
    </div>
  );
};

export default App;
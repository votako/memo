import { COL, ROW } from "./containers/gameField/const";
import { GameField } from "./containers/gameField";

function App() {
  return (
    <GameField row={ROW} col={COL} />
  );
}

export default App;
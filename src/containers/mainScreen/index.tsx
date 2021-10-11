import { useState } from "react";
import { NewGame } from "../../components/newGame";
import { GameField } from "../gameField";
import { ROW, COL } from "../gameField/const";
import { Main } from "./styled";
import { GetDoubleField } from "../gameField/getField";

export const MainScreen = () => {
  const [game, setGame] = useState(false);
  //
  let getField = GetDoubleField(ROW, COL);

  const handleClick = () => {
    setGame((prev) => (prev = !game));
  };

  return (
    <Main>
      <NewGame onClick={handleClick} value={"New Game"} />
      {game && <GameField row={ROW} col={COL} setField={getField} />}
      {!game && <GameField row={ROW} col={COL} setField={getField} />}
    </Main>
  );
};

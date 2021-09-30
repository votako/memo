import Cart from "../../components/cart";
import { GetField } from "./getField";
import { Game, HorizRow, Main as MainDiv } from "./styled";

interface fieldInter {
    row: number,
    col: number,
    val: number,
}

export const Main = () => {
  let field = GetField();
    
  const onClick = (el: fieldInter) => {
    console.log(el);
    console.log(field[el.row][el.col]);
  };

  return (
    <MainDiv>
      <Game>
        {field.map((arrRow, indexRow) => {
          return (
            <HorizRow key={indexRow}>
              { arrRow.map((col, indexCol) => {
                return (
                  <Cart
                    click={() => onClick({row: indexRow, col: indexCol, val: col})}
                    key={indexRow + " " + indexCol}
                    id={ {id: indexRow + " " + indexCol, isClicked: false} }
                    value={col}
                  />
                );
              }) }
            </HorizRow>
          );
        })}
      </Game>
    </MainDiv>
  );
};

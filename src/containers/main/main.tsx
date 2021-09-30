import { useState } from "react";
import Cart from "../../components/cart";
import { GetField } from "./getField";
import { Game, HorizRow, Main as MainDiv } from "./styled";

interface fieldInter {
    row: number,
    col: number,
    val: number,
}

const initalState = {
    rowcol: false,
    name: "",
    row1: [],
    col: [],
    val: 0,
}

export const Main = () => {
  let field = GetField();
  let [colorState, setColor] = useState("[]");
    
    // setColor( prevState => ({
    //     ...prevState,
    //     row1: colorState.row1.push([1,2,3])
    // }))
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
                //   setColor(colorState="asd")
                return (
                  <Cart
                    // click={() => onClick("row: " + indexRow + " col: " + indexCol + " val: " + col)}
                    click={() => onClick({row: indexRow, col: indexCol, val: col})}
                    // click={() => setColor(!colorState)}
                    key={indexRow + " " + indexCol}
                    id={ {id: indexRow + " " + indexCol, isClicked: false} }
                    // isClicked={colorState ? true : false}
                    // color={false}
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

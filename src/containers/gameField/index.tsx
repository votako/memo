import Cart from "../../components/cart";
import { CartInterface } from "../../components/cart/interface";
import useMainState from "./state";
import { Grid } from "./styled";
import { BACK, FORWARD } from "./const";

export const GameField = (size: { row: number; col: number; setField: CartInterface[]; }) => {
  const { field, doublet, allDoublet, Doublet, notDoublet, checkCart } =
    useMainState(size.setField);

  const onClick = (e: CartInterface) => (e.clicked ? null : checkCart(e));

  if (doublet.length === 2) {
    doublet[0].value === doublet[1].value
      ? Doublet(doublet)
      : notDoublet(doublet, 200);
  }
  if (field.length - 1 === allDoublet) {
    console.log("game end");
  }
  return (
    <Grid>
      {field.map((el) => {
        return (
          <Cart
            key={el.id}
            id={el.id}
            value={el.clicked ? el.value : "="}
            // value={el.value}
            color={el.clicked ? BACK : FORWARD}
            onClick={() => onClick(el)}
            clicked={el.clicked}
            double={el.double}
          />
        );
      })}
    </Grid>
  );
};

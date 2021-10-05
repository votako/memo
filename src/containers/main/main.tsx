import Cart from "../../components/cart";
import { GetField } from "./getField";
import useMainState from "./state";
import { Grid } from "./styled";

export const GameField = (size: {row: number, col: number}) => {  
  let getField = GetField(size.row, size.col);
  const { 
    field, 
    doublet, 
    Doublet, 
    notDoublet, 
    checkCart 
  } = useMainState(getField);
  
  if(doublet.length === 2){
    doublet[0].value === doublet[1].value ? Doublet(doublet) : notDoublet(doublet, 300)
  }
  return (
    <Grid>
      {field.map(el => {
        const onClick = () => el.clicked ? ()=>{} : checkCart(el);
        return (
          <Cart
            key={el.id}
            id={el.id}
            value={el.clicked ? el.value : "="}
            // value={el.value}
            color={el.clicked ? "darkgrey" : "grey"}
            onClick={onClick}
            clicked={el.clicked}
            double={el.double}
          />
        );
      })}
    </Grid>
  );
};
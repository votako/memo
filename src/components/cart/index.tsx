import { CatInterface } from './interface'
import { CartStyle } from './styled';

interface CartInter extends CatInterface {
  onClick: () => void;
}

const Cart = (props: CartInter) => {
  return (
    <CartStyle
      onClick={props.onClick} 
      color={props.color}
    >
      {props.value}
    </CartStyle>
  );
};

export default Cart;
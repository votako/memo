import { CartInterface } from './interface'
import { CartStyle } from './styled';

interface CartInter extends CartInterface {
  onClick: (el: CartInterface) => void;
}

const Cart = (props: CartInter) => {
  const handleClick = () => props.onClick(props)
  return (
    <CartStyle
      onClick={handleClick} 
      color={props.color}
    >
      {props.value}
    </CartStyle>
  );
};

export default Cart;
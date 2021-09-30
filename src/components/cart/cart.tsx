import { Cart as CartDiv } from "./styled";
interface CatInter {
  click: () => void;
  value: number;
//   isClicked: boolean;
  id: {
      id: string;
      isClicked: boolean;
  };
}
export const Cart = (props: CatInter) => (
    // console.log(props),
  <CartDiv onClick={props.click} color={props.id.isClicked ? "red" : "grey"} id={props.id.id}>
    {props.value}
  </CartDiv>
);

import { useState } from "react";
import { CartInterface } from "../../components/cart/interface";

const useMainState = (getField: CartInterface[]) => {
  const [field, setField] = useState<CartInterface[]>(getField);
  const [doublet, setDoublet] = useState<CartInterface[]>([]);
  const [allDoublet, setAllDoublet] = useState(0);

  const checkCart = (cart: CartInterface) => {
    setDoublet((prev) => [...prev, cart]);
    const newField = [...field];
    newField[cart.id].clicked = true;
    setField(newField);
  };

  const Doublet = (carts: CartInterface[]) => {
    const newField = [...field];
    newField[carts[0].id].double = true;
    newField[carts[1].id].double = true;
    setField(newField);
    setAllDoublet(allDoublet + 2);
    setDoublet([]);
  };

  const notDoublet = (carts: CartInterface[], delay: number) => {
    setTimeout(() => {
      const newField = [...field];
      newField[carts[0].id].clicked = false;
      newField[carts[1].id].clicked = false;
      setField(newField);
      setDoublet([]);
    }, delay);
  };

  return {
    field,
    setField,
    doublet,
    allDoublet,
    Doublet,
    notDoublet,
    checkCart,
  };
};

export default useMainState;

import { useEffect, useState } from "react";
import { CatInterface } from '../../components/cart/interface'

const useMainState = (getField: CatInterface[]) => {
  
  const [field, setField] = useState<CatInterface[]>(getField);
  const [doublet, setDoublet] = useState<CatInterface[]>([])

  useEffect(() => {
    setField(getField)
  }, [])

  const checkCart = (cart: CatInterface) => {
    setDoublet(prev => [...prev, cart])
    const newField = [...field]
    newField[cart.id].clicked = !field[cart.id].clicked
    setField(newField)
  }

  const Doublet = (carts: CatInterface[]) => {
    const newField = [...field]
    newField[carts[0].id].double = !field[carts[0].id].double
    newField[carts[1].id].double = !field[carts[1].id].double
    setField(newField)
    setDoublet([])
  }

  const notDoublet = (carts: CatInterface[], delay: number) => {
    setTimeout(() => {
      const newField = [...field]
      newField[carts[0].id].clicked = false
      newField[carts[1].id].clicked = false
      setField(newField)
      setDoublet([])
    }, delay);
  }

  return { field, doublet, Doublet, notDoublet, checkCart };
};

export default useMainState;

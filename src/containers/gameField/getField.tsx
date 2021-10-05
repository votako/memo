import { BACK } from "./const";

export const GetField = (getRow: number, getCol: number) => {
  let field = [];
  for (let index = 0; index < (getCol * getRow) / 2; index++) {
    field.push(
      {
        value: index.toString(),
        color: BACK, 
        clicked: false, 
        double: false 
      },
      {
        value: index.toString(),
        color: BACK, 
        clicked: false, 
        double: false
      }
    );
  }
  return field.sort(() => Math.random() - 0.5).map( (el, ind) => {
    return {...el, id:ind}
  })
};


export const TestGetField = (getRow: number, getCol: number) => {
  let field = [];
  for (let index = 0; index < getCol * getRow; index++) {
    field.push({
      value: index%2===0 ? "O": "I", 
      color: BACK, 
      clicked: false, 
      double: false 
    });
  }
  return field.sort(() => Math.random() - 0.5).map( (el, ind) => {
    return {...el, id:ind}
  })
};
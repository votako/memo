
export const GetField = (getRow: number, getCol: number) => {
  let field = [];
  for (let index = 0; index < getCol * getRow; index++) {
    field.push({
      value: index%2===0 ? "O": "I", 
      color: "grey", 
      clicked: false, 
      double: false 
    });
  }

  return field.sort(() => Math.random() - 0.5).map( (el, ind) => {
    return {...el, id:ind}
  })
};

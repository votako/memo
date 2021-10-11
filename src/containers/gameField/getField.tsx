import { BACK } from "./const";

export const GetDoubleField = (getRow: number, getCol: number) => {
  let field = [];
  for (let index = 0; index < (getCol * getRow) / 2; index++) {
    if (index === 6) {
      field.push({
        value: "none",
        color: BACK,
        clicked: true,
        double: true,
      });
    } else {
      field.push(
        {
          value: index.toString(),
          color: BACK,
          clicked: false,
          double: false,
        },
        {
          value: index.toString(),
          color: BACK,
          clicked: false,
          double: false,
        }
      );
    }
  }
  let center = field.splice(12, 1);
  field.sort(() => Math.random() - 0.5).splice(12, 0, center[0]);
  return field.map((el, ind) => ({ ...el, id: ind }));
};

//6x6 4x4 etc.
export const GetDualField = (getRow: number, getCol: number) => {
  let field = [];
  for (let index = 0; index < getCol * getRow; index++) {
    field.push({
      value: index % 2 === 0 ? "O" : "I",
      color: BACK,
      clicked: false,
      double: false,
    });
  }
  return field
    .sort(() => Math.random() - 0.5)
    .map((el, ind) => ({ ...el, id: ind }));
};

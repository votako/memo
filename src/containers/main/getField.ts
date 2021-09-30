export const GetField = () => {
  let field = [];
  const shuffle = (arr: any[]) => {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
  };

  for (let horizontal = 0; horizontal < 5; horizontal++) {
    field[horizontal] = [horizontal];
    for (let vertical = 0; vertical < 5; vertical++) {
      field[horizontal][vertical] = vertical;
    }
    shuffle(field[horizontal]);
  }
  return field;
};

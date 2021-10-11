import { Button } from "./styled";

export const NewGame = (props: { onClick: () => void; value: string }) => {
  return <Button onClick={props.onClick}>{props.value}</Button>;
};

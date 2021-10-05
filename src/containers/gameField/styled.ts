import styled from "styled-components";
import { ROW } from "./const";

export const Grid = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(${ROW}, 1fr);
  grid-gap: 5px;
`;
import styled from "styled-components";

export const Grid = styled.div`
  padding-left: 20%;
  padding-right: 20%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: 50px 50px; */
  grid-gap: 5px;
`;
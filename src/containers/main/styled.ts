import styled from "styled-components";

export const Main = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  font-size: calc(10px + 2vmin);
  color: white;
  /* margin: 0; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Game = styled.div`
  width: 100%;
  border: 1px solid;
`;

export const HorizRow = styled.div`
  width: 310px;
  height: 60px;
  border: 1px solid;
`;

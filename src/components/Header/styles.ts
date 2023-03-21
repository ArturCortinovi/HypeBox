import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  height: 10vh;
  width: 100vw;

  > a {
    color: var(--white);
    font-family: "Climate Crisis", cursive;
    font-size: 2rem;
    text-decoration: none;
  }

  > div {
    display: flex;
    gap: 2rem;

    > a {
      text-decoration: none;
      font-weight: bold;
      color: var(--white);
      font-family: "Roboto";
      :hover {
        opacity: 0.8;
      }
    }
  }
`;

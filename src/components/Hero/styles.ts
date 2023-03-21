import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 90vh;

  > div > h1 {
    color: var(--white);
    font-size: 2rem;

    font-family: "Roboto";
    font-weight: bold;
  }

  > div > p {
    color: var(--white);
    font-size: 1.2rem;
    font-family: "Roboto";
  }

  > div > button {
    margin-top: 1rem;
    padding: 1rem 0;
    width: 50%;
    background-color: var(--primary);
    border: none;
    border-radius: 0.2rem;
    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.table`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: calc(90vh - 2rem);

  margin-top: 2rem;

  background-color: var(--white);

  > thead {
    display: flex;
    padding: 1rem;

    align-items: center;
    justify-content: space-around;

    background-color: #e9e9e9;
    font-family: "Roboto";
  }

  > tbody {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  > tbody > tr {
    display: flex;
    width: 100%;
    height: 4.5rem;

    align-items: center;
    justify-content: space-around;

    border-bottom: 1px solid black;
  }
`;

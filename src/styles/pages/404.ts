import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-top: 1rem;
    text-align: center;
  }

  h2 {
    margin-top: 1rem;
    text-align: center;
    color: var(--gray-300);
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

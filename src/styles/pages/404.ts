import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 12.2rem);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 791px) {
    min-height: 500px;
  }

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

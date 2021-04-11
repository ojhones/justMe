import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 800px;
  max-height: calc(100vh -5rem);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
  }

  h2 {
    margin-top: 1rem;
    text-align: center;
    color: var(--gray-300);
  }

  section {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
      svg {
        width: 4rem;
        height: 4rem;
        margin-top: 2rem;

        opacity: 0.3;
        transition: 0.2s;
        color: var(--gray-300);

        &:hover {
          cursor: pointer;
          filter: brightness(1.8);
        }
      }
      + a {
        margin-left: 0.5rem;
      }
    }
  }
`;

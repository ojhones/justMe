import styled from "styled-components";

export const Container = styled.section`
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
`;

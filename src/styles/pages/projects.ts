import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 5rem;
  min-height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 0 1rem;
  min-height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    width: 100%;
    margin: 2.5rem;
    padding-left: 1rem;

    text-align: start;
  }

  head {
    width: 100%;
    height: auto;
    max-width: 1100px;
    padding: 0rem 1rem;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    div {
      position: relative;

      width: 16rem;
      height: 22rem;
      border: 3px solid var(--gray-800);

      @media (max-width: 768px) {
        margin: 0;
      }

      + div {
        margin-top: 3rem;
        margin-left: 3rem;

        @media (max-width: 768px) {
          margin-left: -7rem;
        }
      }

      :last-child {
        margin-top: 6rem;
        @media (max-width: 768px) {
          margin-top: 3rem;
          margin-left: 4rem;
        }
      }

      img {
        top: 2rem;
        left: 2rem;
        position: absolute;

        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }
  }

  main {
    position: relative;

    width: 100%;
    height: auto;
    padding: 0 1rem;
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 933px) {
      padding: 0 5rem;
      margin-top: 8rem;
      flex-direction: column;
    }

    @media (max-width: 768px) {
      padding: 0 1rem;
    }

    div {
      padding: 2rem 3rem;
      border-top: 3px solid var(--gray-800);
      border-left: 3px solid var(--gray-800);

      + div {
        margin-top: 5rem;
        margin-left: 5rem;
        margin-right: -1rem;

        border-top: 0;
        border-left: 0;
        border-right: 3px solid var(--gray-800);
        border-bottom: 3px solid var(--gray-800);

        text-align: end;

        @media (max-width: 768px) {
          margin-left: 0;
        }
      }

      h2 {
        margin: 1rem 0;
      }

      p {
        margin: 0.5rem 0;
        color: var(--gray-300);
      }
    }

    a {
      right: 0;
      bottom: -5rem;
      position: absolute;

      @media (max-width: 933px) {
        right: 2rem;
      }

      svg {
        width: 4rem;
        height: 4rem;

        opacity: 0.3;
        transition: 0.2s;
        color: var(--gray-300);

        &:hover {
          cursor: pointer;
          filter: brightness(1.8);
        }
      }
    }
  }
`;

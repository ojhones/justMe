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
  max-width: 900px;
  min-height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    width: 100%;
    margin-top: 3rem;
    padding-left: 1rem;

    text-align: start;
  }

  head {
    width: 100%;
    height: auto;
    max-width: 1100px;
    padding: 0rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
      position: relative;

      width: 16rem;
      height: 22rem;
      border: 3px solid var(--gray-800);

      + div {
        margin-top: 3rem;
        margin-left: 3rem;
      }

      :last-child {
        margin-top: 6rem;
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
    padding: 0 1rem;
    margin-top: 2rem;

    h2 {
      margin: 1rem 0;
      color: var(--gray-300);
    }

    p {
      margin: 0.5rem 0;
      color: var(--gray-300);
    }

    a {
      right: 2rem;
      position: absolute;
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

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  main {
    width: 100%;
    padding: 0 5%;
    min-height: 800px;
    max-width: 1100px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 791px) {
      margin-top: 5rem;
      flex-direction: column;
    }

    div {
      position: relative;

      width: 20rem;
      height: 30rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 3px solid var(--gray-800);

      img {
        top: 2rem;
        right: 2rem;
        position: absolute;

        width: 100%;
        height: 100%;

        object-fit: cover;
      }

      h3 {
        left: -48%;
        bottom: 2rem;
        position: absolute;

        font-size: 3rem;
        letter-spacing: 1rem;
        color: var(--gray-800);
        transform: rotate(90deg);
      }
    }

    aside {
      width: 50%;
      margin-left: 3rem;

      h2 {
        margin: 2rem 0;

        font-size: 1.5rem;
        text-transform: uppercase;
      }

      p {
        margin-top: 1rem;
        padding-right: 2.5rem;

        font-size: 0.7rem;
        line-height: 1.4;
        font-weight: lighter;
        color: var(--gray-300);
        letter-spacing: 0.2rem;

        + p {
          margin-top: 1rem;
        }
      }
    }

    + main {
      margin-top: -5rem;

      flex-direction: row-reverse;

      @media (max-width: 791px) {
        margin-top: 5rem;
        flex-direction: column;
      }

      div {
        position: relative;

        img {
          left: 2rem;
        }

        h3 {
          left: 48%;
          bottom: 2rem;
          position: absolute;
        }
      }

      aside {
        p {
          text-align: end;
        }
      }
    }
  }
`;

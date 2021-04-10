import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 5rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  + div {
    margin-top: -11rem;
    min-height: auto;

    @media (max-width: 791px) {
      margin-top: -4rem;
    }
  }

  h1 {
    position: relative;

    width: 100%;
    height: 8rem;
    max-width: 500px;

    display: flex;
    align-items: center;

    font-size: 4rem;

    @media (max-width: 791px) {
      padding-left: 5rem;
    }

    span {
      z-index: -1;
      top: -2.5rem;
      left: -10.2rem;
      position: absolute;

      font-size: 8rem;
      color: var(--gray-800);

      @media (max-width: 791px) {
        padding-left: 11rem;
      }
    }
  }

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
        right: 6rem;
        position: absolute;

        width: 100%;
        height: 100%;

        object-fit: contain;

        :hover {
          cursor: pointer;
          transform: translateY(-0.35rem);
        }

        @media (max-width: 791px) {
          right: 3rem;
        }
      }

      h3 {
        left: -7rem;
        bottom: 2rem;
        bottom: -14rem;
        position: relative;

        font-size: 3rem;
        letter-spacing: 1rem;
        color: var(--gray-800);
        transform: rotate(90deg);
      }
    }

    aside {
      width: 50%;
      margin: 0 3rem;

      @media (max-width: 791px) {
        width: 100%;
        margin-top: 7rem;
        padding-left: 2.5rem;
      }

      h2 {
        margin: 2rem 0;

        font-size: 1.5rem;
        text-transform: uppercase;
      }

      p {
        margin-top: 1rem;
        padding-right: 2.5rem;

        font-size: 0.9rem;
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
        img {
          position: relative;
          left: 5rem;

          @media (max-width: 791px) {
            left: 2rem;
          }
        }

        h3 {
          left: 5rem;
          bottom: 0rem;
          position: absolute;
        }
      }

      aside {
        h2 {
          text-align: end;
          margin-right: 3rem;
        }

        p {
          text-align: end;
        }
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 902px) {
    flex-direction: column;
  }

  aside {
    width: 50%;
    max-width: 600px;
    height: calc(100vh - 5rem);

    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 902px) {
      width: 95%;
      height: calc(75vh - 5rem);
    }

    > span {
      font-size: 1rem;
      font-weight: lighter;
      color: var(--gray-300);
      letter-spacing: 0.2rem;
    }

    h1 {
      margin-top: 0rem;

      font-weight: 900;
      font-size: 4.5rem;
      line-height: 4.5rem;

      @media (max-width: 902px) {
        font-size: 3.5rem;
      }
    }

    p {
      max-width: 450px;
      margin-top: 1rem;

      font-size: 1rem;
      text-align: end;
      line-height: 1.4;
      font-weight: lighter;
      color: var(--gray-300);
      letter-spacing: 0.2rem;
    }

    + aside {
      align-items: center;

      h3 {
        top: -20%;
        right: -45%;
        position: relative;

        font-size: 3rem;
        letter-spacing: 1rem;
        color: var(--gray-800);
        transform: rotate(90deg);
      }

      div {
        position: relative;

        width: 25rem;
        height: 35rem;

        border: 3px solid var(--gray-800);

        @media (max-width: 902px) {
          width: 20rem;
          height: 30rem;
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
  }
`;

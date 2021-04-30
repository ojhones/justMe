import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  position: relative;

  min-height: 100vh;

  footer {
    bottom: 0;
    position: absolute;

    width: 100%;
    padding: 3rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AnimationTop = styled.div`
  top: 0;
  right: 0;

  opacity: 0.2;
  position: absolute;
`;

export const AnimationBottom = styled.section`
  left: 0;
  bottom: 0;

  opacity: 0.2;
  position: absolute;
`;

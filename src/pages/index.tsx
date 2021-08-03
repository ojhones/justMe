import { Parallax } from "react-scroll-parallax";

import { Trail, SocialsMidia } from "../components";

import * as S from "../styles/pages/index";

export default function Home() {
  return (
    <S.Container>
      <S.Wrapper>
        <aside>
          <h1>Jhonatan Lima</h1>

          <p>
            Esse é o meu portfólio, criado com as melhores práticas e
            tecnologias que conheço no momento e, sinceramente, farei desse
            "conheço no momento" meu eterno aprendizado!
          </p>

          <section>
            <SocialsMidia />
          </section>
        </aside>

        <aside>
          <div>
            <img src="/images/jhonatanLima.jpg" alt="Jhonatan Lima!" />

            <h3> Jhonatan </h3>
          </div>
        </aside>
      </S.Wrapper>

      <Trail />
    </S.Container>
  );
}

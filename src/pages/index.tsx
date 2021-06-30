import { Parallax } from 'react-scroll-parallax';

import {
  Trail,
  SocialsMidia
} from '../components'

import * as S from '../styles/pages/index'

export default function Home() {
  return (
    <S.Container >
      <S.Wrapper>
        <aside>
          <h1 className="animate__animated  animate__fadeIn">
            Jhonatan Lima
          </h1>

          <p className="animate__animated  animate__fadeIn">

            Esse é o meu portfólio, criado com as melhores práticas e tecnologias
            que conheço no momento e, sinceramente, farei desse "conheço no momento"
            meu eterno aprendizado!

          </p>

          <section>
            <SocialsMidia />
          </section>
        </aside>

        <aside>
          <div className="animate__animated  animate__fadeIn">

            <img
              src="/images/jhonatanLima.jpg" alt="Jhonatan Lima!"
              className="animate__animated  animate__fadeIn animate__delay-1s"
            />

            <h3> Jhonatan </h3>
          </div>
        </aside>
      </S.Wrapper>

      <Trail />
    </S.Container >
  )
}

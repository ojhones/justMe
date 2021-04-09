import Typewriter from 'typewriter-effect'
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa'

import {
  Trail
} from '../components'

import * as S from '../styles/pages/index'

export default function Home() {
  return (
    <S.Container >
      <S.Wrapper>
        <aside>
          <Typewriter
            onInit={Array}
            options={{
              strings: [
                'Front-end Developer',
                'Desenvolvido por <a href="http://jhonatanlima.com.br">Jhonatan Lima</a> ',
                'Github: <a href="https://github.com/jhonatanllima">jhonatanllima</a> ',
                'Linkedin: <a href="https://www.linkedin.com/in/jhonatan-lima-75a2a0142/">Jhonatan Lima</a> ',
              ],
              autoStart: true,
              loop: true,
            }}
          />

          <h1 className="animate__animated  animate__fadeIn">Jhonatan Lima</h1>
          <p className="animate__animated  animate__fadeIn animate__delay-2s">
            Esse é o meu portfólio, criado com as melhores práticas e tecnologias
            que conheço no momento e, sinceramente, farei desse "conheço no momento"
            meu eterno aprendizado!
          </p>

          <section>
            <a href="#" className="animate__animated  animate__bounceIn animate__delay-3s">
              <FaWhatsappSquare />
            </a>
            <a href="#" className="animate__animated  animate__bounceIn animate__delay-4s">
              <FaLinkedin />
            </a>
            <a href="#" className="animate__animated  animate__bounceIn animate__delay-5s">
              <FaFacebookSquare />
            </a>
          </section>
        </aside>

        <aside>
          <div className="animate__animated  animate__fadeIn">
            <img
              src="/images/jhonatanLima.jpg" alt="Jhonatan Lima!"
              className="animate__animated  animate__fadeIn animate__delay-1s"
            />

            <h3>Jhonatan</h3>
          </div>
        </aside>
      </S.Wrapper>

      <Trail />
    </S.Container>
  )
}

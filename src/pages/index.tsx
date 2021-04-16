import Typewriter from 'typewriter-effect'
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaGithub } from 'react-icons/fa'

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
          <p className="animate__animated  animate__fadeIn">
            Esse é o meu portfólio, criado com as melhores práticas e tecnologias
            que conheço no momento e, sinceramente, farei desse "conheço no momento"
            meu eterno aprendizado!
          </p>

          <section>
            <a
              href="https://github.com/jhonatanllima"
              target="blank" className="animate__animated  animate__fadeIn animate__delay-2s">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jhonatan-lima"
              target="blank" className="animate__animated  animate__fadeIn animate__delay-3s">
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/5515996759630?text=Hey Jhonatan! Vim através do seu portifólio!"
              target="blank" className="animate__animated  animate__fadeIn animate__delay-4s">
              <FaWhatsappSquare />
            </a>

            <a
              href="https://www.facebook.com/jhonyllima/"
              target="blank" className="animate__animated  animate__fadeIn animate__delay-5s">
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

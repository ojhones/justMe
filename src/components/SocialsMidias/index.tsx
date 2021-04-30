import { Parallax } from 'react-scroll-parallax';
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaGithub } from 'react-icons/fa'

import * as S from './styles'

export function SocialsMidia() {
  return (
    <S.Container>
      <Parallax x={[45, -150]}>
        <a
          href="https://github.com/jhonatanllima"
          target="blank" className="animate__animated  animate__fadeIn animate__delay-2s">
          <FaGithub />
        </a>
      </Parallax>

      <Parallax x={[50, -120]}>
        <a
          href="https://www.linkedin.com/in/jhonatan-lima-75a2a0142/"
          target="blank" className="animate__animated  animate__fadeIn animate__delay-3s">
          <FaLinkedin />
        </a>
      </Parallax>

      <Parallax x={[60, -100]}>
        <a
          href="https://wa.me/5515996759630?text=Hey Jhonatan! Vim através do seu portifólio!"
          target="blank" className="animate__animated  animate__fadeIn animate__delay-4s">
          <FaWhatsappSquare />
        </a>
      </Parallax>

      <Parallax x={[45, -60]}>
        <a
          href="https://www.facebook.com/jhonyllima/"
          target="blank" className="animate__animated  animate__fadeIn animate__delay-5s">
          <FaFacebookSquare />
        </a>
      </Parallax>
    </S.Container>
  )
}
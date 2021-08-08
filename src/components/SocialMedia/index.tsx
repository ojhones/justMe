import {
  FaGithub,
  FaLinkedin,
  FaWhatsappSquare,
  FaFacebookSquare,
} from "react-icons/fa"

import * as S from "./styles"

export function SocialMedia() {
  return (
    <S.Container>
      <a
        href="https://github.com/jhonatanllima"
        target="blank"
        className="animate__animated  animate__fadeIn"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/jhonatan-lima-75a2a0142/"
        target="blank"
        className="animate__animated  animate__fadeIn animate__delay-1s"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://wa.me/5515996759630?text=Hey Jhonatan! Vim através do seu portfólio!"
        target="blank"
        className="animate__animated  animate__fadeIn animate__delay-2s"
      >
        <FaWhatsappSquare />
      </a>

      <a
        href="https://www.facebook.com/jhonyllima/"
        target="blank"
        className="animate__animated  animate__fadeIn animate__delay-3s"
      >
        <FaFacebookSquare />
      </a>
    </S.Container>
  )
}

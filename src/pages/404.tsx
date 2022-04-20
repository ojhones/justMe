import Lottie from "react-lottie"


import {
  SocialsMedia
} from '../components'

import animationData from "../../public/animations/404.json"

import * as S from "../styles/pages/404"

export default function Custom404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <S.Container>
      <div className="animate__animated animate__fadeInUp">
        <Lottie height={150} width={350} options={defaultOptions} />
      </div>
      <h1 className="animate__animated animate__fadeInDown">
        Essa página ainda não foi criada :(
      </h1>

      <h2 className="animate__animated  animate__fadeIn animate__delay-1s">
        Aproveita, me segue e diz o que <br /> achou do meu portifólio!
      </h2>

      <section>

        <SocialsMedia />
      </section>
    </S.Container>
  )
}

import Link from "next/link";
import Lottie from "react-lottie";

import animationData from "../../../public/animations/atom.json";

import * as S from "./styles";

export function Header() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.Container>
      <div>
        <aside className="animate__animated  animate__fadeInTopLeft">
          <Lottie height={80} width={150} options={defaultOptions} />
        </aside>

        <nav>
          <a href="/" className="animate__animated  animate__bounceIn animate__delay-1s">
            Home
          </a>
          <a href="/projectos" className="animate__animated  animate__bounceIn animate__delay-2s">Projetos</a>
        </nav>
      </div>
    </S.Container>
  );
}

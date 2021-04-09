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
    <S.Container className="animate__animated  animate__fadeIn">
      <div>
        <aside className="animate__animated  animate__fadeInTopLeft animate__delay-1s">
          <Lottie height={80} width={150} options={defaultOptions} />
        </aside>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </div>
    </S.Container>
  );
}

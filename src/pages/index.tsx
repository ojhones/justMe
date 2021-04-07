import Lottie from 'react-lottie'

import animationData from '../../public/animations/atom.json'

import * as S from '../styles/pages/index'

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <S.Container>
      <div className="animate__animated animate__fadeInUp">
        <Lottie
          height={200}
          width={200}
          options={defaultOptions}
        />
      </div>
      <h1 className="animate__animated animate__fadeInDown">Building ...</h1>
    </S.Container>
  )
}

import Lottie from 'react-lottie'
import GlobalStyle from '../styles/GobalStyle'

import * as S from '../styles/pages/app'

import animationData from '../../public/animations/background.json'
import animationDataBottom from '../../public/animations/backgroundBottom.json'

import {
  SEO,
  Header,
} from '../components'

function MyApp({ Component, pageProps }) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptionsBottom = {
    loop: false,
    autoplay: true,
    animationData: animationDataBottom,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <S.Container>
      <S.AnimationTop>
        <Lottie
          width={1000}
          height={1000}
          options={defaultOptions}
        />
      </S.AnimationTop>

      <S.AnimationBottom>
        <Lottie
          width={1000}
          height={1000}
          options={defaultOptionsBottom}
        />
      </S.AnimationBottom>

      <SEO
        title="jhonatan Lima"
        description="Esse é o meu portfólio, criado com as melhores práticas e 
        tecnologias que conheço no momento e, sinceramente, farei desse conheço no momento meu eterno aprendizado!"
      />

      <Header />

      <GlobalStyle />

      <Component {...pageProps} />

    </S.Container>
  )
}


export default MyApp

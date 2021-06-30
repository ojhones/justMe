import Lottie from 'react-lottie'
import Typewriter from 'typewriter-effect';
import GlobalStyle from '../styles/GobalStyle'
import { ParallaxProvider } from 'react-scroll-parallax';


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
    <ParallaxProvider>
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

        <footer>
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
        </footer>
      </S.Container>
    </ParallaxProvider>
  )
}


export default MyApp

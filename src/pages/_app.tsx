import GlobalStyle from '../styles/GobalStyle'

import {
  SEO,
  Header,
} from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO
        title="jhonatan Lima"
        description="Esse é o meu portfólio, criado com as melhores práticas e tecnologias que conheço no momento e, sinceramente, farei desse conheço no momento meu eterno aprendizado!"
      />
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}


export default MyApp

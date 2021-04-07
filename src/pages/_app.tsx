import GlobalStyle from '../styles/GobalStyle'

import {
  SEO,
} from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO
        title="Jhonatan Lima"
        description="Esse é o meu portfólio, criado com as melhores práticas que conheço no momento e, sinceramente, farei desse conheço no momento meu eterno aprendizado!"
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp


import * as S from '../styles/pages/index'

export default function Home() {
  return (
    <S.Container className="animate__animated animate__fadeInDown">
      <aside>
        <span>{'</>'} FrontEnd Developer </span>
        <h1>Jhonatan Lima</h1>
        <p>
          Esse é o meu portfólio, criado com as melhores práticas e tecnologias
          que conheço no momento e, sinceramente, farei desse "conheço no momento"
          meu eterno aprendizado!
        </p>
      </aside>

      <aside>
        <div>
          <img src="/images/jhonatanLima.jpg" alt="Apenas eu!" />
        </div>
      </aside>
    </S.Container>
  )
}

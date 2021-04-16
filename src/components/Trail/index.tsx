import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import * as S from './styles'

export function Trail() {
  return (
    <>
      <S.Container>
        <h1>
          <span>Front</span>
          Just me
        </h1>

        <main>
          <div className="animate__animated  animate__fadeIn">
            <img
              src="/images/iclouds.svg" alt="Jhonatan Lima!"
              className="animate__animated  animate__fadeInLeft animate__delay-1s"
            />

            <h3>#iClouds</h3>
          </div>

          <aside>
            <h2>iCLouds Sistemas Web</h2>
            <p>
              Já formado,  fiz a nlw 2 da Rocketseat. Então tomei a maior decisão e mais difícil da minha vida! Deixar a gerência do banco
              pra seguir meu sonho de ser, desenvolvedor.
            </p>

            <p>
              IClouds me abriu as portas, abraçou minha "loucura", como todo mundo costumam dizer..
            </p>

            <p>
              Atualmente estou nessa empresa sensacional, onde sou extramente grato pelo conhecimento
              que estão me oferendo e meus amigos que me ajudam a evoluir todo dia na programação!
            </p>
            <a href="https://www.iclouds.com.br/" target="blank"><HiOutlineArrowNarrowRight /></a>
          </aside>
        </main>

        <main>
          <div className="animate__animated  animate__fadeIn">
            <img
              src="/images/mercantil.png" alt="Jhonatan Lima!"
              className="animate__animated  animate__fadeInLeft animate__delay-1s"
            />

            <h3>#Mercantil</h3>

          </div>

          <aside>
            <h2>Banco Mercantil</h2>
            <p>
              Depois da gigante primeira experiência, minha situação financeira precisava
              tomar um salto, então decidi que gostaria de trabalhar em um banco. Minha mãe,
              aliás meu grande exemplo e minha Rainha, trabalha até hoje com serviços gerais na agência do
              bradesco de minha cidade, então pedi a ela para falar com o gerente geral que gostaria
              de me apresentar pra ele. E assim aconteceu!
            </p>

            <p>
              De momento percebi que ele gostou de minha forma comunicativa! ( Más precisava me certificar!
              com CPA-10! Nem sabia o que era ), o que consegui em 12 dias!
            </p>

            <p>
              Durei exatamente 1 ano no cargo de escriturário de agência, consegui uma agência em Sumaré-Sp
              junto com uma promoção para gerente comercial! Levei a agência ao topo, foi um sucesso!
              Mercantil me deu tudo que tenho hoje. Sou extremanente grato, más queria seguir meu sonho!
            </p>
            <a href="https://mercantildobrasil.com.br/Paginas/Home.aspx" target="blank"><HiOutlineArrowNarrowRight /></a>
          </aside>
        </main>
      </S.Container>

      <S.Container>
        <main>
          <div className="animate__animated  animate__fadeIn">
            <img
              src="/images/datametrica.png" alt="Jhonatan Lima!"
              className="animate__animated  animate__fadeInLeft animate__delay-1s"
            />

            <h3>#Dtm</h3>
          </div>

          <aside>
            <h2>Datamétrica</h2>
            <p>
              Um call center prestando serviços terceirizados para Sabesp.
              Meu primeiro emprego, onde tudo começou, onde a maturidade profissional
              começou a acontecer.
            </p>

            <p>
              Fiquei pouco menos de 1 ano  como operador de telemarketing e como almejava
              alcancei o cargo de liderança. Monitoria de qualidade em atendimento ao cliente!
            </p>

            <p>
              Datamétrica me fez entender o tipo de profissional que sou, a partir disso entendi
              os voôs que podia alcançar. Com essa experiência de liderança me tornei extremamente
              focado, comunicativo e responsável, evoluindo tanto na faculdade de Análise e Desenvolvimento
              de sistemas, quanto na vida pessoal.
              Foi meu primeiro emprego e sou muito grato a essa empresa.
            </p>
            <a href="https://www.linkedin.com/company/datametrica/" target="blank"><HiOutlineArrowNarrowRight /></a>
          </aside>
        </main>
      </S.Container>
    </>
  )
}
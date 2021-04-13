import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import * as S from '../styles/pages/projects'

export default function projects() {
  return (
    <S.Container>
      <S.Wrapper>
        <h1>Consulta De animais</h1>

        <head>
          <div >
            <img src="/images/jhonatanLima.jpg" alt="" className="animate__animated animate__fadeInDown animate__delay-1s" />
          </div>

          <div >
            <img src="/images/jhonatanLima.jpg" alt="" className="animate__animated animate__fadeInDown animate__delay-2s" />
          </div>

          <div >
            <img src="/images/jhonatanLima.jpg" alt="" className="animate__animated animate__fadeInDown animate__delay-3s" />
          </div>
        </head>

        <main>
          <div>
            <h2>Desenvolvido em React js</h2>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo,
              vitae iaculis nisl. Tá deprimidis, eu conheço uma cachacis que pode alegrar
              sua vidis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis
              e fermentis. Quem num gosta di mim que vai caçá sua turmis!Mussum Ipsum, cacilds
              vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl.
              Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Suco de
              cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Quem
              num gosta di mim que vai caçá sua turmis!
          </p>
          </div>

          <div>
            <h2>Desenvolvido em React js</h2>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo,
              vitae iaculis nisl. Tá deprimidis, eu conheço uma cachacis que pode alegrar
              sua vidis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis
              e fermentis. Quem num gosta di mim que vai caçá sua turmis!Mussum Ipsum, cacilds
              vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl.
              Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Suco de
              cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Quem
              num gosta di mim que vai caçá sua turmis!
          </p>
          </div>
          <a href="https://www.linkedin.com/company/datametrica/" target="blank"><HiOutlineArrowNarrowRight /></a>
        </main>
      </S.Wrapper>
    </S.Container>
  )
}
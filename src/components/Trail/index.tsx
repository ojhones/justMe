import { data } from './data'

import ReactHtmlParser from 'react-html-parser';
import { Parallax } from 'react-scroll-parallax';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import * as S from './styles'

export function Trail() {
  return (
    <S.Container>
      <h1>

        <span>
          <Parallax x={[-10, 10]}>Front</Parallax>
        </span>

        <Parallax x={[-30, 0]}>
          Just me
        </Parallax>
      </h1>

      {data.map(company => (
        <main key={company.id}>

          <div className="animate__animated  animate__fadeIn">
            <img
              src={company.image}
              alt={company.altImage}
              className={company.animation}
            />


            <h3>{company.hashCompany}</h3>
          </div>

          <aside>
            <Parallax x={[40, -20]}>
              <Parallax y={[-100, 50]}>
                <h2>{company.title}</h2>
              </Parallax>
            </Parallax>

            <Parallax y={[-25, 15]}>
              {ReactHtmlParser(company.resume)}
            </Parallax>

            <Parallax x={[-60, 20]}>
              <a
                href={company.urlCompany}
                target={company.targetUrl}>
                <HiOutlineArrowNarrowRight />
              </a>
            </Parallax>
          </aside>

        </main>
      ))
      }
    </S.Container >
  )
}

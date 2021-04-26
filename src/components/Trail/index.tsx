import { data } from './data'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import ReactHtmlParser from 'react-html-parser';

import * as S from './styles'


export function Trail() {
  return (
    <S.Container>
      <h1>
        <span>Front</span>
          Just me
      </h1>

      {data.map(company => (
        <main>

          <div className="animate__animated  animate__fadeIn">
            <img
              src={company.image} alt={company.altImage}
              className={company.animation}
            />

            <h3>{company.hashCompany}</h3>
          </div>

          <aside>
            <h2>{company.title}</h2>

            {ReactHtmlParser(company.resume)}

            <a
              href={company.urlCompany}
              target={company.targetUrl}>
              <HiOutlineArrowNarrowRight />
            </a>
          </aside>

        </main>
      ))}
    </S.Container>
  )
}

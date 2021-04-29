import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import { data } from './api/dataProjects'

import * as S from '../styles/pages/projects'

export default function projects() {
  return (
    <S.Container>
      {data.map(project => (
        <S.Wrapper key={project.id}>
          <h1>{project.title}</h1>

          <head>
            <div >
              <img src={project.img1} alt={project.title} className={project.animationImg1} />
            </div>

            <div >
              <img src={project.img2} alt={project.title} className={project.animationImg2} />
            </div>

            <div >
              <img src={project.img3} alt={project.title} className={project.animationImg3} />
            </div>
          </head>

          <main>
            <div>
              <h2>{project.tecnologies}</h2>
              <p>
                {project.descriptionTeconologies}
              </p>
            </div>

            <div>
              <h2>{project.learning}</h2>
              <p>
                {project.descriptionLearning}
              </p>
            </div>
            <a href={project.urlProject} target={project.targetUrl}><HiOutlineArrowNarrowRight /></a>
          </main>

        </S.Wrapper>
      ))}
    </S.Container>
  )
}

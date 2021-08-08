import { GetStaticPaths, GetStaticProps } from "next"

import Prismic from "@prismicio/client"
import { RichText } from "prismic-dom"
import { getPrismicClient } from "../services/prismic"

import { Trail, SocialsMidia } from "../components"

import * as S from "../styles/pages/index"

type Profile = {
  title: string
  resume: string
  altImage: string
  imageProfile: string
  verticalName: string
}
interface ProfileProps {
  formattedProfile: Profile
}

export default function Home({ formattedProfile }: ProfileProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <aside>
          <h1>{formattedProfile.title}</h1>

          <p>{formattedProfile.resume}</p>

          <section>
            <SocialsMidia />
          </section>
        </aside>

        <aside>
          <div>
            <img
              src={formattedProfile.imageProfile}
              alt={formattedProfile.altImage}
            />

            <h3>{formattedProfile.verticalName}</h3>
          </div>
        </aside>
      </S.Wrapper>

      <Trail />
    </S.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "justme")],
    {
      fetch: [
        "justme.title",
        "justme.resume",
        "justme.profileimage",
        "justme.verticalname",
      ],
      pageSize: 100,
    }
  )

  const dataProfile = response.results.map((profile) => {
    return {
      altImage: profile.data.profileimage.alt,
      title: RichText.asText(profile.data.title),
      imageProfile: profile.data.profileimage.url,
      resume: RichText.asText(profile.data.resume),
      verticalName: RichText.asText(profile.data.verticalname),
    }
  })

  const formattedProfile = {
    altimage: dataProfile[0].altImage,
    title: dataProfile[0].title,
    imageProfile: dataProfile[0].imageProfile,
    resume: dataProfile[0].resume,
    verticalName: dataProfile[0].verticalName,
  }

  // console.log("response", JSON.stringify(response, null, 2));
  // console.log("dataProfile", dataProfile);

  return {
    props: {
      formattedProfile,
    },
    revalidate: 60 * 60 * 6, //24h
  }
}

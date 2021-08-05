import { GetStaticPaths, GetStaticProps } from "next";

import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../services/prismic";

import { Trail, SocialsMidia } from "../components";

import * as S from "../styles/pages/index";

type Profile = {
  title: string;
  resume: string;
  altImage: string;
  imageProfile: string;
  verticalName: string;
};
interface ProfileProps {
  formatedProfile: Profile;
}

export default function Home({ formatedProfile }: ProfileProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <aside>
          <h1>{formatedProfile.title}</h1>

          <p>{formatedProfile.resume}</p>

          <section>
            <SocialsMidia />
          </section>
        </aside>

        <aside>
          <div>
            <img
              src={formatedProfile.imageProfile}
              alt={formatedProfile.altImage}
            />

            <h3>{formatedProfile.verticalName}</h3>
          </div>
        </aside>
      </S.Wrapper>

      <Trail />
    </S.Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

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
  );

  const dataProfile = response.results.map((profile) => {
    return {
      altImage: profile.data.profileimage.alt,
      title: RichText.asText(profile.data.title),
      imageProfile: profile.data.profileimage.url,
      resume: RichText.asText(profile.data.resume),
      verticalName: RichText.asText(profile.data.verticalname),
    };
  });

  const formatedProfile = {
    altimage: dataProfile[0].altImage,
    title: dataProfile[0].title,
    imageProfile: dataProfile[0].imageProfile,
    resume: dataProfile[0].resume,
  };

  // console.log("response", JSON.stringify(response, null, 2));
  // console.log("dataProfile", dataProfile);

  return {
    props: {
      formatedProfile,
    },
  };
};

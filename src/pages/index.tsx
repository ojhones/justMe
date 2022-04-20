import Image from "next/image";
import { GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import Prismic from "@prismicio/client";


import {
  FaDownload
} from "react-icons/fa";

import { Trail, SocialsMedia } from "../components";

import * as S from "../styles/pages/index";
import { getPrismicClient } from "../services/prismic";

type Profile = {
  title: string;
  resume: string;
  altImage: string;
  verticalName: string;
  imageProfile: string;
};
interface ProfileProps {
  formattedProfile: Profile;
}

export default function Home({ formattedProfile }: ProfileProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <aside>
          <h1>{formattedProfile.title}</h1>

          <p>{formattedProfile.resume}</p>

          <section>
            <SocialsMedia />
          </section>

          <a
            rel="noopener"
            target="_blank"
            href="https://drive.google.com/file/d/1cdqr_LVHjrR1rbmPCcaV98_-ngboBYBh/view?usp=sharing"
          >
            <FaDownload size={20} /> Baixar CV
          </a>
        </aside>

        <aside>
          <div>
            <Image
              width="auto"
              height="auto"
              objectFit="cover"
              alt={formattedProfile.altImage}
              src={formattedProfile.imageProfile}
            />

            <h3>{formattedProfile.verticalName}</h3>
          </div>
        </aside>
      </S.Wrapper>

      <Trail />
    </S.Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const { results } = await prismic.query(
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

  const formattedProfile = {
    altimage: results[0].data.profileimage.alt,
    title: RichText.asText(results[0].data.title),
    imageProfile: results[0].data.profileimage.url,
    resume: RichText.asText(results[0].data.resume),
    verticalName: RichText.asText(results[0].data.verticalname),
  };

  return {
    props: {
      formattedProfile,
    },
    revalidate: 60 * 60 * 6, // 6h
  };
};

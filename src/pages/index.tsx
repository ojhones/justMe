import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";

import {
  FaDownload
} from "react-icons/fa";

import { Trail, SocialsMedia } from "../components";

import * as S from "../styles/pages/index";

export default function Home() {
  return (
    <S.Container>
      <S.Wrapper>
        <aside>
          <h1>Jhonatan Lima</h1>

          <p>
            Esse é o meu portfólio, criado com as melhores práticas e
            tecnologias que conheço no momento e, sinceramente, farei desse
            "conheço no momento" meu eterno aprendizado!
          </p>

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
            <img src="/images/jhonatanLima.jpg" alt="Jhonatan Lima!" />

            <h3> Jhonatan </h3>
          </div>
        </aside>
      </S.Wrapper>

      <Trail />
    </S.Container>
  );
}

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

  // console.log("response", JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};

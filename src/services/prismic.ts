import Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  const apiEndpoint = "https://justmejhonatanlima.cdn.prismic.io/api/v2";

  const prismic = Prismic.client(apiEndpoint, {
    req: req,
  });

  return prismic;
}

import type { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import * as TYPE from "../src/types";
import Ranking from "../components/Ranking";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://passunestback.kro.kr/graphql",
  cache: new InMemoryCache(),
});

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        getAllBrands {
          id
          name
          company
          image_url
          price
          passed
          purchase_link
          released_date
          sources {
            name
          }
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
};

interface props {
  data: {
    getAllBrands: TYPE.BRAND[];
  };
}

export default function Home({ data }: props) {
  const waterBrands = data.getAllBrands;

  return (
    <Layout>
      <Head>
        <title>지금 내가 마시고 있는 물의 수질적합도는..?</title>
        <meta name="description" content="Created by MOOCHINDEV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Ranking waterBrands={waterBrands} />
    </Layout>
  );
}

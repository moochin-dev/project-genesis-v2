import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";

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
<<<<<<< Updated upstream
=======
          purchase_link
          released_date
          sources {
            name
          }
>>>>>>> Stashed changes
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

type waterBrand = {
  id: number;
  name: string;
  company: string;
  image_url: string;
  price: number;
  passed: boolean;
};

const Home: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const waterBrands = data.getAllBrands;

  return (
    <Layout>
      <Head>
        <title>지금 내가 마시고 있는 물의 수질적합도는..?</title>
        <meta name="description" content="Created by MOOCHINDEV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {waterBrands.map((waterBrand: waterBrand) => (
        <div
          key={waterBrand.id}
          style={{
            display: "flex",
            border: "solid 1px black",
            borderRadius: "3px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>{waterBrand.name}</h2>
            <p>{waterBrand.company}</p>
            <p>{waterBrand.price}</p>
            <p>{`passed?: ${waterBrand.passed ? `yes` : `no`}`}</p>
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default Home;

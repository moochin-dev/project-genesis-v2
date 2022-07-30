import Head from "next/head";
import Detail from "../components/Detail";
import Layout from "../components/Layout";

export default function DetailDemo() {
  return (
    <Layout>
      <Head>
        <title>삼다수의 수질적합도는..?</title>
        <meta name="description" content="Created by MOOCHINDEV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Detail />
    </Layout>
  );
}

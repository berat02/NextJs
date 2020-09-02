import Link from "next/link";
import Layout from "../companents/layout";
import Head from "next/head";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Hakkında</title>
      </Head>
      <h1>Hakkında Sayfası</h1>
    </Layout>
  );
}

export default HomePage;

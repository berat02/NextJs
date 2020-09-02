import Link from "next/link";
import Navigation from "../companents/navigation";
import Layout from "../companents/layout";
import Head from "next/head";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <h1>Anasayfaya</h1>
    </Layout>
  );
}
export default HomePage;

import Navigation from "./navigation";
import Head from "next/head";
import styles from './nav.module.css'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Berat Yıldırım'ın Web Sitesi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navigation />
      <main>{children}</main>
      <footer className={styles.footer}>Berat'ın sayfasına Hoş Geldiniz</footer>
    </div>
  );
}
export default Layout;

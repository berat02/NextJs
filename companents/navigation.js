import Link from "next/link";
import styles from './nav.module.css'

function Navigation() {
  return (
      <nav>
      <Link href="/">
          <a className={styles.link}>Anasayfa</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>Hakkında</a>
        </Link>
      </nav>
  );
}

export default Navigation;

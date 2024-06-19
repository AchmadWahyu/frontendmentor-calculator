'use client';

import Calculator from './components/Calculator/Calculator';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header_container}>
        <strong>calc</strong>
        <div>THEME</div>
      </div>

      <Calculator />
    </main>
  );
}

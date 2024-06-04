import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header_container}>
        <strong>calc</strong>
        <div>THEME</div>
      </div>

      <div className={styles.panel_container}>
        <div className={styles.panel}>
          <p className={styles.panel_content}>399,981</p>
        </div>
      </div>

      <div className={styles.keys_container}>
        <div className={styles.keys}>
          <div className={styles.key}>7</div>
        </div>
      </div>
    </main>
  );
}

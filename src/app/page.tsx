'use client';

import Key from './components/Key/Key';

import styles from './page.module.scss';

export default function Home() {
  const handleClick = () => {};

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
          <Key onClick={handleClick}>7</Key>
          <Key onClick={handleClick}>8</Key>
          <Key onClick={handleClick}>9</Key>
          <Key className={styles.key_text} onClick={handleClick}>
            DEL
          </Key>

          <Key onClick={handleClick}>4</Key>
          <Key onClick={handleClick}>5</Key>
          <Key onClick={handleClick}>6</Key>
          <Key onClick={handleClick}>+</Key>

          <Key onClick={handleClick}>1</Key>
          <Key onClick={handleClick}>2</Key>
          <Key onClick={handleClick}>3</Key>
          <Key onClick={handleClick}>-</Key>

          <Key onClick={handleClick}>.</Key>
          <Key onClick={handleClick}>0</Key>
          <Key onClick={handleClick}>/</Key>
          <Key onClick={handleClick}>x</Key>

          <Key className={styles.key_text} onClick={handleClick}>
            RESET
          </Key>
          <Key className={styles.key_equal_sign} onClick={handleClick}>
            =
          </Key>
        </div>
      </div>
    </main>
  );
}

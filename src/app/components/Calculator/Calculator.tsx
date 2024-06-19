import { useState } from 'react';

import Key from '../Key/Key';

import styles from './Calculator.module.scss';

const Calculator = () => {
  const [panelValue, setPanelValue] = useState('');

  const handleClick = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.panel_container}>
        <div className={styles.panel}>
          <p className={styles.panel_content}>{panelValue}</p>
        </div>
      </div>

      <div className={styles.keys_container}>
        <div className={styles.keys}>
          <Key onClick={() => setPanelValue(panelValue + '7')}>7</Key>
          <Key onClick={() => setPanelValue(panelValue + '8')}>8</Key>
          <Key onClick={() => setPanelValue(panelValue + '9')}>9</Key>
          <Key
            className={styles.key_text}
            onClick={() =>
              setPanelValue(panelValue.substring(0, panelValue.length - 1))
            }
          >
            DEL
          </Key>

          <Key onClick={() => setPanelValue(panelValue + '4')}>4</Key>
          <Key onClick={() => setPanelValue(panelValue + '5')}>5</Key>
          <Key onClick={() => setPanelValue(panelValue + '6')}>6</Key>
          <Key onClick={() => setPanelValue(panelValue + ' + ')}>+</Key>

          <Key onClick={() => setPanelValue(panelValue + '1')}>1</Key>
          <Key onClick={() => setPanelValue(panelValue + '2')}>2</Key>
          <Key onClick={() => setPanelValue(panelValue + '3')}>3</Key>
          <Key onClick={() => setPanelValue(panelValue + ' - ')}>-</Key>

          <Key onClick={() => setPanelValue(panelValue + '.')}>.</Key>
          <Key onClick={() => setPanelValue(panelValue + '0')}>0</Key>
          <Key onClick={() => setPanelValue(panelValue + ' / ')}>/</Key>
          <Key onClick={() => setPanelValue(panelValue + ' * ')}>x</Key>

          <Key className={styles.key_text} onClick={() => setPanelValue('')}>
            RESET
          </Key>
          <Key className={styles.key_equal_sign} onClick={() => {
            setPanelValue(String(eval?.(`"use strict"; ${panelValue}`)))
          }}>
            =
          </Key>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

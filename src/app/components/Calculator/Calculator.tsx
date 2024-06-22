import { useMemo, useState } from 'react';

import Key from '../Key/Key';

import styles from './Calculator.module.scss';

const symbolRegExp = /[+*\/-]/;

const Calculator = () => {
  const [panelValue, setPanelValue] = useState('');

  const isSymbol = useMemo(
    () => panelValue[panelValue?.length - 1]?.trim().length === 0,
    [panelValue]
  );

  const del = () => {
    // if symbol, remove the symbol and 2 spaces (before and after the symbol)
    if (isSymbol) {
      setPanelValue(panelValue.substring(0, panelValue.length - 3));
    } else {
      setPanelValue(panelValue.substring(0, panelValue.length - 1));
    }
  };

  const count = () => {
    setPanelValue(String(eval?.(`"use strict"; ${panelValue}`)));
  };

  return (
    <div className={styles.container}>
      <div className={styles.panel_container}>
        <input
          value={panelValue}
          onChange={() => {}}
          className={styles.panel}
          onKeyDown={(e) => {
            console.log('e: ', e);
            // numbers
            if (!isNaN(Number(e?.key)))
              return setPanelValue(panelValue + e?.key);
            
            // math operation
            if (symbolRegExp.test(e?.key))
              return setPanelValue(panelValue + ` ${e?.key} `);
            
            // result
            if (e?.key === 'Enter' || e?.key === '=') return count();
            
            // delete
            if(e?.key === 'Backspace') return del();
          }}
        />
      </div>

      <div className={styles.keys_container}>
        <div className={styles.keys}>
          <Key onClick={() => setPanelValue(panelValue + '7')}>7</Key>
          <Key onClick={() => setPanelValue(panelValue + '8')}>8</Key>
          <Key onClick={() => setPanelValue(panelValue + '9')}>9</Key>
          <Key className={styles.key_text} onClick={del}>
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
          <Key className={styles.key_equal_sign} onClick={count}>
            =
          </Key>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

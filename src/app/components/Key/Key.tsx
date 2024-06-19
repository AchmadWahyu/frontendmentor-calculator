'use client';

import cn from 'classnames';

import styles from './key.module.scss';

const Key = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => (
  <div className={styles.key_container}>
    <button onClick={onClick} className={cn(styles.key, className)}>
      {children}
    </button>
  </div>
);

export default Key;

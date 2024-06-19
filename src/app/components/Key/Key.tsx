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
  <button onClick={onClick} className={cn(styles.key, className)}>
    {children}
  </button>
);

export default Key;

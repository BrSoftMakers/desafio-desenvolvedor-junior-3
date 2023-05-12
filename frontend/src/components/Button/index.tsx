import React from 'react';

import styles from './styles.module.scss';

type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  customClass?: string;
  isDisabled?: boolean;
  children?: React.ReactNode;
};

export default function Button({
  onClick,
  text,
  customClass,
  isDisabled = false,
  children,
}: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${customClass ? customClass : ''}`}
      disabled={isDisabled}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClick(event)}
      type="button"
    >
      {text}
      {children}
    </button>
  );
}

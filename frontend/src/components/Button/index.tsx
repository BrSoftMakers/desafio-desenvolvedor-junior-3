import React from 'react';

import styles from './styles.module.scss';

type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  customClass?: string;
  isDisabled?: boolean;
};

export default function Button({
  onClick,
  text,
  customClass,
  isDisabled = false,
}: ButtonProps) {
  return (
    <button
      className={customClass ? customClass : styles.btn}
      disabled={isDisabled}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClick(event)}
    >
      {text}
    </button>
  );
}

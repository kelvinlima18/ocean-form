import React, { ButtonHTMLAttributes } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button type="button" {...rest} className={styles.buttonContainer}>
      {children}
      <FiArrowRight />
    </button>
  );
};

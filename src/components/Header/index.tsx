import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import styles from './styles.module.scss';

import logoImg from '../../assets/logo.png';

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logoImg} alt="Oceaning" />

        <div className={styles.socialMedia}>
          <span>COMPARTILHE</span>
          <a href="/">@theoceaning</a>
        </div>

        <AiOutlineInstagram color="#FFFFFF" size={57} />
      </div>
    </header>
  );
};

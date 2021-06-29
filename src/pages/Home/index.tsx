import React from 'react';
import { Button } from '../../components/Button';
import history from '../../utils/history';

import styles from './styles.module.scss';

export const Home: React.FC = () => {
  return (
    <main className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <span>Time de desenvolvimento</span>
        <h1>Sua evolução começa agora</h1>
        <p>
          Faça parte dessa jornada junto com a Oceaning e conquiste o
          <br />
          mundo com suas habilidades de programação.
        </p>

        <Button onClick={() => history.push('/dev/register')}>
          COMEÇAR AGORA
        </Button>
      </div>
    </main>
  );
};

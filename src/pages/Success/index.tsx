import React from 'react';
import { Button } from '../../components/Button';

import history from '../../utils/history';

import styles from './styles.module.scss';

export const Success: React.FC = () => {
  return (
    <main className={styles.successContainer}>
      <div className={styles.successContent}>
        <span>Parabéns!</span>
        <h1>Suas habilidades foram enviadas</h1>
        <p>
          Faça parte dessa jornada junto com a Oceaning e conquiste o
          <br />
          mundo com suas habilidades de programação.
        </p>

        <Button onClick={() => history.push('/dev/list')}>VER TODOS</Button>
      </div>
    </main>
  );
};

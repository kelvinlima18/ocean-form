import React from 'react';

import { Button } from '../../components/Button';
import { useDev } from '../../hooks/useDev';
import history from '../../utils/history';

import styles from './styles.module.scss';

export const DevList: React.FC = () => {
  const { devs } = useDev();

  return (
    <main className={styles.listContainer}>
      <div className={styles.listContent}>
        <header>
          <span>
            {devs.length === 1
              ? `${devs.length} desenvolvedor encontrado`
              : `${devs.length} desenvolvedores encontrados`}
          </span>
          <Button onClick={() => history.push('/dev/register')}>
            ADICIONAR
          </Button>
        </header>

        <table>
          <tbody>
            {devs.map(dev => (
              <tr key={dev.name}>
                <td>
                  <span>{dev.name}</span>
                </td>
                <td>{dev.email}</td>
                <td>
                  <strong>
                    {dev.habilities?.length === 1
                      ? `${dev.habilities?.length} habilidade`
                      : `${dev.habilities?.length} habilidades`}
                  </strong>
                </td>
                <td>
                  <p>
                    {`Recebido em ${new Intl.DateTimeFormat('pt-BR').format(
                      new Date(String(dev.date)),
                    )}`}
                  </p>
                </td>
                <td>
                  <button type="button">VER HABILIDADES</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

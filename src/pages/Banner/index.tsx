import React from 'react';
import { Button } from '../../components/Button';
import history from '../../utils/history';

import styles from './styles.module.scss';

export const Banner: React.FC = () => {
  return (
    <main className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <span>Developers Oceaning</span>
        <h1>
          Faça parte do time de <br /> desenvolvimento da agência <br />
          Oceaning
        </h1>

        <div className={styles.bannerTable}>
          <table>
            <tbody>
              <tr>
                <td>
                  <h2>22</h2>
                  <span>JUN</span>
                </td>
                <td>
                  <h2>23</h2>
                  <span>JUN</span>
                </td>
                <td>
                  <h2>24</h2>
                  <span>JUN</span>
                </td>
                <td className={styles.live}>
                  <span>Início da live</span>
                  <h1>19:00</h1>
                </td>
              </tr>
            </tbody>
          </table>

          <Button onClick={() => history.push('/home')}>INSCREVA-SE</Button>
        </div>
      </div>
    </main>
  );
};

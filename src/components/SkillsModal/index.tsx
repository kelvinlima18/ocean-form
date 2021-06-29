import React, { MouseEvent } from 'react';
import Modal from 'react-modal';
import { FiChevronsDown } from 'react-icons/fi';
import { useDev } from '../../hooks/useDev';

import styles from './styles.module.scss';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function SkillsModal({
  isOpen,
  onRequestClose,
}: ModalProps): JSX.Element {
  const { skills, handleRemoveSkill } = useDev();

  const skillsCont = skills.length;

  const handleRemove = (event: MouseEvent<HTMLButtonElement>) => {
    handleRemoveSkill(event.currentTarget.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={styles.modalContainer}
      className={styles.modalContent}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className={styles.modalButtonClose}
      >
        <span>
          {skillsCont === 1
            ? `${skillsCont} Habilidade adicionada`
            : `${skillsCont} Habilidades adicionadas`}
        </span>

        <span>
          FECHAR HABILIDADES
          <FiChevronsDown />
        </span>
      </button>

      <div className={styles.modalScroll}>
        {skills.map(option => (
          <div key={option.skill} className={styles.modalSkill}>
            <span>{option.skill}</span>
            <button type="button" value={option.skill} onClick={handleRemove}>
              REMOVER
            </button>
          </div>
        ))}
      </div>
    </Modal>
  );
}

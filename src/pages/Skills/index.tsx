import React, { ChangeEvent, useRef, useState, MouseEvent } from 'react';
import { FiCheck, FiChevronsUp } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { SkillsModal } from '../../components/SkillsModal';

import styles from './styles.module.scss';
import { useDev } from '../../hooks/useDev';
import history from '../../utils/history';

export const Skills: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [skill, setSkill] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const {
    nameDev,
    emailDev,
    skillsList,
    skills,
    handleAddSkill,
    handleAddDev,
  } = useDev();

  const skillsCont = skills.length;

  const handleSkillInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSkill(event.target.value);
  };

  const handleAddSkillButton = (event: MouseEvent<HTMLButtonElement>) => {
    handleAddSkill(event.currentTarget.value);
  };

  const loadSkillsOptions = () => {
    if (skill.length > 0) {
      const newSkillOptions = skillsList.filter(option =>
        option.toLowerCase().includes(skill.toLowerCase()),
      );

      return (
        <div className={styles.skillButtons}>
          {newSkillOptions.map(newSkill => (
            <button
              key={newSkill}
              type="button"
              value={newSkill}
              onClick={handleAddSkillButton}
            >
              {newSkill}
              <FiCheck size={20} />
            </button>
          ))}
        </div>
      );
    }

    return <div />;
  };

  const handleNewDev = () => {
    handleAddDev({
      name: nameDev,
      email: emailDev,
      date: new Date(),
      habilities: skills,
    });

    history.push('/dev/success');
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <main className={styles.skillContainer}>
      <div className={styles.skillContent}>
        <span>Olá {nameDev},</span>
        <h1>Quais são suas habilidades?</h1>

        <Form ref={formRef} onSubmit={handleNewDev}>
          <Input
            name="skill"
            type="text"
            placeholder="Digite uma habilidade"
            onChange={handleSkillInput}
          />

          <Button type="submit">Finalizar</Button>
        </Form>

        {loadSkillsOptions()}

        <div className={styles.skillNone}>
          {skillsCont === 0 ? (
            <span className={styles.skillNone}>
              Nenhuma habilidade adicionada
            </span>
          ) : (
            <button
              type="button"
              onClick={handleOpenModal}
              className={styles.skillOpenModal}
            >
              <span className={styles.skillOpenModal}>
                {skillsCont === 1
                  ? `${skillsCont} Habilidade adicionada`
                  : `${skillsCont} Habilidades adicionadas`}
              </span>

              <span>
                VER HABILIDADES
                <FiChevronsUp />
              </span>

              <SkillsModal
                isOpen={openModal}
                onRequestClose={handleCloseModal}
              />
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

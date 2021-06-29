import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import styles from './styles.module.scss';
import { useDev } from '../../hooks/useDev';
import history from '../../utils/history';

import { getValidationErrors } from '../../utils/getValidationErros';

interface DevData {
  name: string;
  email: string;
}

export const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { handleName, handleEmail } = useDev();

  async function handleAddDev({ name, email }: DevData) {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string().required('Campo obrigatório'),
      });

      await schema.validate(
        { name, email },
        {
          abortEarly: false,
        },
      );

      handleName(name);
      handleEmail(email);

      history.push('/dev/skills');
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }

  return (
    <main className={styles.registerContainer}>
      <div className={styles.registerContent}>
        <span>Vamos começar</span>
        <h1>Como devemos te chamar?</h1>
        <p>
          Nos diga como devemos te chamar e qual é o seu e-mail <br />
          para que possamos te enviar novidades.
        </p>

        <Form ref={formRef} onSubmit={handleAddDev}>
          <div>
            <Input name="name" type="text" placeholder="Digite o seu nome" />

            <Input
              name="email"
              type="email"
              placeholder="Digite o seu e-mail"
            />
          </div>

          <Button type="submit">CONTINUAR</Button>
        </Form>
      </div>
    </main>
  );
};

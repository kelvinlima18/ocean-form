import React, {
  useRef,
  InputHTMLAttributes,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const { defaultValue, fieldName, registerField, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputContent}
        defaultValue={defaultValue}
        name={name}
        ref={inputRef}
        style={{
          color: `${isFocused ? '#15ffab' : '#363443'}`,
          borderBottomColor: `${
            isFocused ? '#15ffab' : `${error ? '#ff2358' : '#363443'}`
          }`,
        }}
        onFocus={handleInputFocus}
        {...rest}
      />

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

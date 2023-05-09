import React from 'react';
import styles from './styles.module.scss';

type InputProps = {
  label: string;
  required?: boolean;
  placeholder: string;
  name: string;
  value: string;
  onChange: (value: string, name: string) => void;
  type?: string;
  errorMessage: string;
  isValid: string;
};

export default function Input({
  label,
  required,
  placeholder,
  name,
  value,
  type = 'text',
  errorMessage,
  isValid,
  onChange,
}: InputProps) {
  return (
    <div className={styles.inputContainer} role={isValid}>
      <label>
        {label} {required && <span>*</span>}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={({
          target: { value, name },
        }: React.ChangeEvent<HTMLInputElement>) => onChange(value, name)}
      />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
}

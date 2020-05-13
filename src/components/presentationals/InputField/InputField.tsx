import * as React from 'react';
import { ChangeEvent } from 'react';
import { FieldError } from 'react-hook-form';
import Styles from './InputField.module.scss';

interface IProps {
  label: string;
  name: string;
  error?: FieldError;
  type: 'text' | 'password' | 'hidden' | 'tel' | 'email' | 'number';
  htmlRef?: string |
    ((instance: HTMLInputElement | null) => void) |
    React.RefObject<HTMLInputElement>;
  value?: any;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<IProps> = ({ label, name, error, required, htmlRef, ...rest }) => (
  <div className={Styles.wrapper}>
    <label htmlFor={name} >{required ? `${label}*` : label}</label>
    <input
      id={name}
      name={name}
      ref={htmlRef}
      aria-invalid={error ? 'true' : 'false'}
      { ...rest }
    />
    {error && (
      <span className={Styles.error}>{error.message}</span>
    )}
  </div>
);

export default InputField;

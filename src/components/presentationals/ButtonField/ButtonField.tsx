import * as React from 'react';
import Styles from './ButtonField.module.css';

interface IProps {
  label: string;
  onClick?: () => void;
  type: 'button' | 'submit';
}

const ButtonField: React.FC<IProps> = ({ label, onClick, type }) => (
  <div className={Styles.wrapper}>
    <button onClick={onClick} className={Styles.button} type={type}>{label}</button>
  </div>
);

export default ButtonField;

import * as React from 'react';
import cx from 'classnames';
import Styles from './ButtonField.module.scss';

interface IProps {
  label: string;
  onClick?: () => void;
  type: 'button' | 'submit';
  size?: 'small' | 'big';
  variant?: 'primary' | 'secondary';
}

const ButtonField: React.FC<IProps> = ({ label, onClick, type, size = 'big', variant = 'primary' }) => {
  const buttonStyles = cx({
    [Styles.button]: true,
    [Styles.small]: size === 'small',
    [Styles.secondary]: variant === 'secondary',
  });

  return (
    <div className={Styles.wrapper}>
      <button onClick={onClick} className={buttonStyles} type={type}>{label}</button>
    </div>
  );
};

export default ButtonField;

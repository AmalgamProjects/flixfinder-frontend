import * as React from 'react';
import Styles from './TileButton.module.scss';

interface IOwnProps {
  icon: any;
  label: string;
}

const TileButton: React.SFC<IOwnProps> = ({ icon, label }) => {
  return (
    <button type="button" className={Styles.button}>
      <span className={Styles.icon}>{icon}</span>
      <span className={Styles.label}>{label}</span>
    </button>
  );
};

export default TileButton;

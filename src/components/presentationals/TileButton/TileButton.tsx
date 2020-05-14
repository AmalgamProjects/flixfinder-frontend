import * as React from 'react';
import Styles from './TileButton.module.scss';
import cx from 'classnames';

interface IOwnProps {
  icon: any;
  label: string;
  onClick: () => void;
  expanded?: boolean;
}

const TileButton: React.SFC<IOwnProps> = ({ expanded, icon, label, onClick }) => {
  const buttonClassNames = cx({
    [Styles.button]: !expanded,
    [Styles.buttonExpanded]: expanded
  })

  return (
    <button type="button" className={buttonClassNames} onClick={onClick}>
      <span className={Styles.labelWithIcon}>
        <span className={Styles.icon}>{icon}</span>
        <span className={Styles.label}>{label}</span>
      </span>
    </button>
  );
};

export default TileButton;

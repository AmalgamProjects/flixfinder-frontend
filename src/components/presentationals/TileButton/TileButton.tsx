import * as React from 'react';
import cx from 'classnames';
import Styles from './TileButton.module.scss';

interface IOwnProps {
  icon: any;
  label: string;
  onClick: () => void;
  expanded?: boolean;
  isLoading?: boolean;
}

const TileButton: React.SFC<IOwnProps> = ({ expanded, icon, label, onClick, isLoading }) => {
  const buttonClassNames = cx({
    [Styles.button]: !expanded,
    [Styles.buttonExpanded]: expanded,
    [Styles.loading]: isLoading,
  });

  return (
    <button type="button" className={buttonClassNames} onClick={onClick}>
      <span className={Styles.labelWithIcon}>
        {!isLoading && <span className={Styles.icon}>{icon}</span>}
        <span className={Styles.label}>{label}</span>
      </span>
    </button>
  );
};

export default TileButton;

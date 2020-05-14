import * as React from 'react';
import Styles from './ContentWithHeader.module.scss';
import { Heading } from '..';

interface IOwnProps {
  heading: string;
}

const ContentWithHeader: React.FC<IOwnProps> = ({ heading, children }) => {
  return (
    <div className={Styles.wrapper}>
      <Heading size="small" title={heading} />
      <div className={Styles.children}>
        {children}
      </div>
    </div>
  );
};

export default ContentWithHeader;

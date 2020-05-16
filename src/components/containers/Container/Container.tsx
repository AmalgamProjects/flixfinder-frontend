import * as React from 'react';
import Styles from './Container.module.scss';

const Container: React.SFC = ({ children }) => (
  <div className={Styles.wrapper}>
    <div className={Styles.inner}>
      {children}
    </div>
  </div>
);

export default Container;

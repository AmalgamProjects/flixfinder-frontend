import * as React from 'react';
import Styles from './Container.module.css';

const Container: React.SFC = ({ children }) => (
  <div className={Styles.wrapper}>{children}</div>
);

export default Container;

import * as React from 'react';
import Styles from './Row.module.css';

const Row: React.SFC = ({ children }) => (
  <div className={Styles.wrapper}>{children}</div>
);

export default Row;

import * as React from 'react';
import Styles from './Col.module.css';

const Col: React.SFC = ({ children }) => (
  <div className={Styles.wrapper}>{children}</div>
);

export default Col;

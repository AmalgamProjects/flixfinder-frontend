import * as React from 'react';
import Styles from './Empty.module.scss';

const Empty: React.SFC = ({ children }) => <div className={Styles.wrapper}>{children}</div>;

export default Empty;

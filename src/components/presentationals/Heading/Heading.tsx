import * as React from 'react';
import Styles from './Heading.module.scss';

interface IOwnProps {
  title: string;
}

const Heading: React.FC<IOwnProps> = ({ title }) => (
  <h1 className={Styles.heading}>{title}</h1>
);

export default Heading;

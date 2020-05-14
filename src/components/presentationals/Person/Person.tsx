import * as React from 'react';
import Styles from './Person.module.scss';
import { Image } from '../';

interface IOwnProps {
  title: string;
  subtitle: string;
  image: string;
}

const Person: React.FC<IOwnProps> = ({ title, subtitle, image }) => (
  <div className={Styles.wrapper}>
    <div className={Styles.image}>
      <Image circular url={image} alt="person" />
    </div>
    <div className={Styles.details}>
      <p className={Styles.title}>{title}</p>
      <p className={Styles.subtitle}>{subtitle}</p>
    </div>
  </div>
);

export default Person;

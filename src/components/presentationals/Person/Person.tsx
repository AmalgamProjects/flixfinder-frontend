import * as React from 'react';
import Styles from './Person.module.scss';

interface IOwnProps {
  title: string;
  subtitle: string[];
  image: string;
}

const Person: React.FC<IOwnProps> = ({ title, subtitle, image }) => (
  <div className={Styles.wrapper}>
    <div className={Styles.image}>
      {image ? <div className={Styles.bg} style={{ backgroundImage: `url(${image})` }} /> :
        <div className={Styles.empty}>
          <span className={Styles.emptyText}>
            NO PHOTO
          </span>
        </div>}
    </div>
    <div className={Styles.details}>
      {title && <p className={Styles.title}>{title}</p>}
      {subtitle && <p className={Styles.subtitle}>
        {subtitle.join(', ')}
      </p>}
    </div>
  </div>
);

export default Person;

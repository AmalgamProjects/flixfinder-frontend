import * as React from 'react';
import Styles from './Image.module.scss';

interface IOwnProps {
  alt: string;
  url: string;
}

const Image: React.FC<IOwnProps> = ({ alt, url }) => (
  <img className={Styles.image} alt={alt} src={url} />
);

export default Image;

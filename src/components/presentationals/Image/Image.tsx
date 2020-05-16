import * as React from 'react';
import Styles from './Image.module.scss';
import cx from 'classnames';

interface IOwnProps {
  alt: string;
  url: string;
  circular?: boolean;
}

const Image: React.FC<IOwnProps> = ({ alt, url, circular }) => {
  const imageClassNames = cx({
    [Styles.image]: true,
    [Styles.imageCircular]: circular
  });

  return (
    <img className={imageClassNames} alt={alt} src={url} />
  );
}

export default Image;

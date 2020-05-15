import * as React from 'react';
import Styles from './YoutubeVideo.module.scss';

interface IOwnProps {
  url: string;
}

const YoutubeVideo: React.FC<IOwnProps> = ({ url }) => {
  return (
    <div className={Styles.wrapper}>
      <iframe title="youtube" src={url} className={Styles.video}></iframe>
    </div>
  );
};

export default YoutubeVideo;

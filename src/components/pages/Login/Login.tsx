import * as React from 'react';
import { Login as LoginUser } from '../../containers';
import { Logo } from '../../presentationals';

import Styles from './Login.module.css';

const Login: React.FC = () => (
  <div className={Styles.wrapper}>
    <div className={Styles.column}>
      <div className={Styles.covers} />
    </div>
    <div className={Styles.column}>
      <div className={Styles.inner}>
        <div className={Styles.logo}>
          <Logo />
        </div>
        <div className={Styles.content}>
          <h1 className={Styles.heading}>Set up your preferences</h1>
          <p className={Styles.paragraph}>Select your favourite genres, movies and TV shows.</p>

          <h1 className={Styles.heading}>Get recommendations</h1>
          <p className={Styles.paragraph}>
            Our Flix Finder Intelligence Engine will use your preferences
            to provide you movie and TV show suggestions
          </p>

          <h1 className={Styles.heading}>Choose what you want to watch</h1>
          <p className={Styles.paragraph}>Create your watchlist, and mark movies you’ve already seen as watched.</p>

          <h1 className={Styles.heading}>The more you use it the smarter it gets</h1>
          <p className={Styles.paragraph}>
            The Flix Finder Intelligence Engine will continue to learn your
            preferences and provide the most up to date movie recommendations.
          </p>
        </div>
        <LoginUser />
      </div>
    </div>
  </div>
);

export default Login;

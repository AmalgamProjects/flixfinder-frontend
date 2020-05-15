import React, { Fragment } from 'react';
import firebase from 'firebase';
import { ButtonField } from '../../presentationals';
import { FirebaseUser } from '../../../types/user';

interface IOwnProps {
  onLogin: (params: FirebaseUser) => void;
  onLogout: () => void;
  isLoggedIn: boolean;
}

class FirebaseAuth extends React.Component<IOwnProps> {
  componentDidMount() {
    const { onLogin, isLoggedIn } = this.props;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (!isLoggedIn) {
          const { uid, photoURL, displayName, email, isAnonymous } = user;

          user.getIdToken().then(accessToken => {
            onLogin({
              accessToken,
              photoURL,
              displayName,
              email,
              isAnonymous,
              uid,
            });
          });
        }
      }
    }, error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
  }

  handleSignIn = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => firebase.auth().signInWithPopup(googleAuthProvider))
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  handleSignOut = () => {
    const { onLogout } = this.props;
    firebase.auth().signOut().then(() => {
      onLogout();
    });
  };

  render(): JSX.Element {
    const { isLoggedIn } = this.props;

    return (
      <Fragment>
        {!isLoggedIn && (
          <ButtonField type="button" onClick={this.handleSignIn} label="Get started now" />
        )}
        {isLoggedIn && (
          <ButtonField type="button" size="small" variant="secondary" onClick={this.handleSignOut} label="Log Out" />
        )}
      </Fragment>
    );
  }
}

export default FirebaseAuth;

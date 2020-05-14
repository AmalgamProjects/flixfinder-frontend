import React, { Fragment } from 'react';
import firebase from 'firebase';
// import { FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseAuthedAnd } from '@react-firebase/auth';
import { ButtonField } from '../../presentationals';
import { FirebaseUser } from '../../../types/user';
import { getAuthData } from '../../../helpers/auth';

interface IOwnProps {
  onLogin: (params: FirebaseUser) => void;
  onLogout: () => void;
  isLoggedIn: boolean;
}

class FirebaseAuth extends React.Component<IOwnProps> {
  componentDidMount() {
    const { onLogin } = this.props;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (!getAuthData()) {
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

    firebase.auth().signInWithPopup(googleAuthProvider);
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
        {/* <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre style={{ height: 300, overflow: 'auto' }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>
        <div>
          <IfFirebaseAuthed>
            {() => {
              return <div>You are authenticated</div>;
            }}
          </IfFirebaseAuthed>
          <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== 'anonymous'}
          >
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd>
          </div> */}
      </Fragment>
    );
  }
}

export default FirebaseAuth;

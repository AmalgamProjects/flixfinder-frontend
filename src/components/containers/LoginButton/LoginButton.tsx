import React from 'react';
import firebase from 'firebase';
import { FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseAuthedAnd } from '@react-firebase/auth';
import { ButtonField } from '../../presentationals';
import { ILoginParams } from '../../../api/login';

interface IOwnProps {
  onLogin: (params: ILoginParams) => void;
}

class LoginButton extends React.Component<IOwnProps> {
  handleSignIn = () => {
    const { onLogin } = this.props;
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);

    onLogin({});

    /* firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(accessToken => {
          console.log('accessToken', accessToken);
        });
      }
    }, error => {
      console.log(error);
    }); */
  };

  handleSignOut = () => {
    firebase.auth().signOut();
  };

  render(): JSX.Element {
    // const clientConfig = { client_id: settings.googleOauthClientId };

    return (
      <div>
        <ButtonField type="button" onClick={this.handleSignIn} label="Sign In with Google" />
        <ButtonField type="button" onClick={this.handleSignOut} label="Sign Out" />
        <FirebaseAuthConsumer>
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
        </div>
      </div>
    );
  }
}

export default LoginButton;

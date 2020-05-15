import firebase from 'firebase';
import { IAuthData } from '../redux/auth/saga';
import { FirebaseUser } from '../types/user';
import settings from '../settings';

export const clearAuthData = () => {
  localStorage.removeItem('persist:Auth');
};

export const getAuthData = (): FirebaseUser | null => {
  console.log('getAuthData');
  /* if (firebase.apps.length === 0) {
    firebase.initializeApp({ ...settings.firebase });
  }

  const user = firebase.auth().currentUser;

  console.log('user', user);

  if (user) {
    const { displayName, email, isAnonymous, photoURL, uid } = user;
    const accessToken = await user.getIdToken().then(token => token);

    return {
      accessToken,
      displayName,
      email,
      isAnonymous,
      photoURL,
      uid,
    };
  }

  return null; */

  try {
    // const persited = JSON.parse(sessionStorage.getItem('persist:Auth') || '');
    const authUser = Object.keys(sessionStorage).filter(item => item.startsWith('firebase:authUser'))[0];
    const persited = JSON.parse(sessionStorage.getItem(authUser) || '');

    return {
      accessToken: persited.stsTokenManager.accessToken,
      displayName: persited.displayName,
      email: persited.email,
      isAnonymous: persited.isAnonymous,
      photoURL: persited.photoURL,
      uid: persited.uid,
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    // clearAuthData();
    return null;
  }

  /* try {
    const persited = JSON.parse(localStorage.getItem('persist:Auth') || '');
    return JSON.parse(persited.Auth).user;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    // clearAuthData();
    return null;
  } */
};

export const setAuthData = (data: IAuthData) => {
  localStorage.setItem('persist:Auth', JSON.stringify(data));
};

export const removeAuthData = () => {
  localStorage.removeItem('persist:Auth');
};

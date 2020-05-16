import { IAuthData } from '../redux/auth/saga';
import { FirebaseUser } from '../types/user';

export const clearAuthData = () => {
  localStorage.removeItem('persist:Auth');
};

export const getAuthData = (): FirebaseUser | null => {
  try {
    let persited = null;
    const authUser = Object.keys(sessionStorage).filter(item => item.startsWith('firebase:authUser'))[0];
    if (authUser) {
      persited = JSON.parse(sessionStorage.getItem(authUser) || '');
    }

    if (!persited) {
      const auth = JSON.parse(localStorage.getItem('persist:Auth') || '');
      persited = JSON.parse(auth.Auth).user;
    }

    return {
      accessToken: (persited.stsTokenManager && persited.stsTokenManager.accessToken) || persited.accessToken,
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

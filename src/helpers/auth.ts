import { IAuthData } from '../redux/auth/saga';
import { FirebaseUser } from '../types/user';

export const clearAuthData = () => {
  localStorage.removeItem('persist:Auth');
};

export const getAuthData = (): FirebaseUser | null => {
  try {
    const persited = JSON.parse(localStorage.getItem('persist:Auth') || '');
    return JSON.parse(persited.Auth).user;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    // clearAuthData();
    return null;
  }
};

export const setAuthData = (data: IAuthData) => {
  localStorage.setItem('persist:Auth', JSON.stringify(data));
};

export const removeAuthData = () => {
  localStorage.removeItem('persist:Auth');
};

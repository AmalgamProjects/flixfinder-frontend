import { IAuthData } from '../redux/auth/saga';
import { FirebaseUser } from '../types/user';

export const clearAuthData = () => {
  localStorage.removeItem('persist:Auth');
};

export const getAuthData = (): FirebaseUser | null => {
  try {
    const auth = JSON.parse(localStorage.getItem('persist:Auth') || '');
    return JSON.parse(auth.UserReducer).user;
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

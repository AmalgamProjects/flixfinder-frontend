import { IAuthData } from '../redux/auth/saga';

export function clearAuthData() {
  localStorage.removeItem('auth');
}

export function getAuthData() {
  try {
    const auth = JSON.parse(localStorage.getItem('auth') || '');
    return auth;
  } catch (err) {
    clearAuthData();
    return null;
    // return new Map();
  }
}

export function setAuthData(data: IAuthData) {
  localStorage.setItem('auth', JSON.stringify(data));
}

export function removeAuthToken() {
  localStorage.removeItem('auth');
}

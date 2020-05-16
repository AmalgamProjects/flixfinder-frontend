import createdStore from './store';
import authActions from './auth/actions';

export default () => new Promise(() => {
  createdStore.store.dispatch(authActions.checkAuthorization());
});

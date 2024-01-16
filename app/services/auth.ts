import { auth } from '../firebase';

export const checkAuthStatus = () => {
  const user = auth.currentUser;
  return !!user;
};

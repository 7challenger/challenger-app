import * as AT from './actionTypes';
import { withSuccessError } from '../../../utils/withSuccessError';

export const authenticateUser = () => {
  return { type: AT.AUTHENTICATE_USER };
};

export const login = (creds) => {
  return { type: AT.LOGIN, creds };
};

export const {
  actionError: loginError,
  actionSuccess: loginSuccess,
} = withSuccessError(AT.LOGIN);

export const logout = () => {
  return { type: AT.LOGOUT };
};

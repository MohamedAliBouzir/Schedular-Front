import { createContext, useCallback, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../interfaces/AuthContext-interface';
import authReducer, { defaultAuthState } from './authReducer';
import { AuthProviderProps } from '../type/authProvider-type';
import { AuthActionEnum } from '../type/authActions-type';
import { UserData } from '../type/UserData-type';

const authContext = createContext<AuthContext>({
  authState: defaultAuthState,
  globalLogInDispatch: () => {},
  globalLogOutDispatch: () => {},
});

export const AuthContextProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);
  const navigate = useNavigate();

  // Check if user detail is persisted
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      authDispatch({ type: AuthActionEnum.LOG_IN, payload: userData });
    }
  }, []);

  const globalLogInDispatch = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (props: UserData) => {
      const { authToken, userId, email, firstName, lastName, phoneNumber, createdAt, updatedAt } =
        props;
      authDispatch({
        type: AuthActionEnum.LOG_IN,
        payload: {
          authToken,
          userId,
          email,
          firstName,
          lastName,
          phoneNumber,
          createdAt,
          updatedAt,
        },
      });
      navigate('/resource');
    },
    [navigate]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const globalLogOutDispatch = useCallback(() => {
    authDispatch({ type: AuthActionEnum.LOG_OUT, payload: null });
    navigate('/auth-pages/login');
  }, [navigate]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const context = {
    authState,
    globalLogInDispatch,
    globalLogOutDispatch,
  };
  return <authContext.Provider value={context}>{children}</authContext.Provider>;
};
export default authContext;

import { FC, ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { IAuthContextProps } from '../interfaces/AuthContext-interface';

const authContext = createContext<IAuthContextProps>({
  authToken: null,
  setAuthToken: () => {},
});
interface IAuthContextProviderProps {
  children: ReactNode;
}
export const AuthContextProvider: FC<IAuthContextProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(Cookies.get('authToken') || null);
  const navigate = useNavigate();
  const handleMissingToken = useCallback(() => navigate('/auth-pages/login'), [navigate]);
  useEffect(() => {
    if (!authToken) {
      handleMissingToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken]);

  const value = useMemo(
    () => ({
      setAuthToken,
      authToken,
    }),
    [authToken]
  );
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default authContext;

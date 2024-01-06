import { FC, ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import { IAuthContextProps } from '../interfaces/AuthContext-interface';
import { authPagesMenu, protectedRoutesMenu } from '../menu';

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
  const handleMissingToken = useCallback(() => navigate(`${authPagesMenu.login.path}`), [navigate]);
  const location = useLocation();
  useEffect(() => {
    const isPathProtected = Object.values(protectedRoutesMenu)
      .map((route) => route.path)
      .includes(location.pathname);
    if (!authToken && isPathProtected) {
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

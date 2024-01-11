import { FC, ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import { IAuthContextProps } from '../interfaces/AuthContext-interface';
import { authPagesMenu, protectedRoutesMenu } from '../menu';
import { TUserDataProps } from '../type/UserData-type';
import { getUserData } from '../services/userData-service';

const authContext = createContext<IAuthContextProps>({
  user: null,
  setUser: () => {},
  authToken: null,
  setAuthToken: () => {},
});
interface IAuthContextProviderProps {
  children: ReactNode;
}
export const AuthContextProvider: FC<IAuthContextProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(Cookies.get('authToken') || null);
  const [user, setUser] = useState<TUserDataProps | null>(null);
  const navigate = useNavigate();
  const handleMissingToken = useCallback(() => navigate(`${authPagesMenu.login.path}`), [navigate]);
  const location = useLocation();

  useEffect(() => {
    const isPathProtected = Object.values(protectedRoutesMenu)
      .map((route) => route.path)
      .includes(location.pathname);
    if (authToken && !user) {
      const fetchData = async () => {
        const userData = await getUserData(authToken);
        if (userData) {
          setUser(userData);
        }
      };
      fetchData();
    }
    if (!authToken && isPathProtected) {
      handleMissingToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken]);

  const value = useMemo(
    () => ({
      setUser,
      user,
      setAuthToken,
      authToken,
    }),
    [authToken, user]
  );
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default authContext;

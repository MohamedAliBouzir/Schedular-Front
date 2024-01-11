import { useContext } from 'react';
import Cookies from 'js-cookie';
import authContext from '../contexts/authContext';
import { fetcher } from '../helpers/helpers';
import { TLoginInput } from '../type/loginInput-type';
import { getUserData } from '../services/userData-service';

const useAuth = () => {
  const { authToken, setAuthToken, user, setUser } = useContext(authContext);

  const login = async (values: TLoginInput) => {
    const data = await fetcher(`${import.meta.env.VITE_BACK_URL}/auth/sign-in`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(values),
    });
    // eslint-disable-next-line prefer-template
    if (data) {
      const token = 'Bearer '.concat(data.access_token);
      setAuthToken(token);
      Cookies.set('authToken', `${token}`, { expires: 1 });
      const userData = await getUserData(authToken!);
      if (userData) setUser(userData);
    }
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    Cookies.remove('authToken');
  };
  return { authToken, login, logout, user, setUser };
};
export default useAuth;

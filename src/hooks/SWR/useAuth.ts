import { useContext } from 'react';
import Cookies from 'js-cookie';
import authContext from '../../contexts/authContext';
import { fetcher } from '../../helpers/helpers';
import { TLoginInput } from '../../type/loginInput-type';

const useAuth = () => {
  const { authToken, setAuthToken } = useContext(authContext);

  const login = async (values: TLoginInput) => {
    const data = await fetcher(`${import.meta.env.VITE_BACK_URL}/auth/sign-in`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(values),
    });
    const token = JSON.stringify(data.access_token);
    if (data) {
      setAuthToken(token);
      Cookies.set('authToken', token, { expires: 1 });
    }
  };

  const logout = () => {
    setAuthToken(null);
    Cookies.remove('authToken');
  };
  return { authToken, login, logout };
};
export default useAuth;

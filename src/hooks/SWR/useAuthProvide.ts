import { useState } from 'react';
import Cookies from 'js-cookie';

const useProvideAuth = () => {
  const [token, setToken] = useState<string | null | undefined>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const login = (signToken: string) => {
    Cookies.set('token', signToken, { expires: 7 });
    setToken(signToken);
    setIsLogin(true);
  };

  const logout = () => {
    Cookies.remove('token');
    setToken(null);
    setIsLogin(false);
  };

  return { token, login, logout, isLogin };
};

export default useProvideAuth;

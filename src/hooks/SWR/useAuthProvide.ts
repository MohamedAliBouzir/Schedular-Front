import { useState } from 'react';

const useProvideAuth = () => {
  const [token, setToken] = useState<string | null | undefined>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const login = (signToken: string) => {
    localStorage.setItem('isLogin', signToken);
    setToken(signToken);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem('isLogin');
    setToken(null);
    setIsLogin(false);
  };

  return { token, login, logout, isLogin };
};

export default useProvideAuth;

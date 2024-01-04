import { useState } from 'react';
import Cookies from 'js-cookie';

export const useCookies = () => {
  const [value, setValue] = useState<string | null>(null);

  const setItem = (key: string, cookieValue: string) => {
    Cookies.set(key, cookieValue, { expires: 7 });
    setValue(value);
  };

  const getItem = (key: string) => {
    const cookieValue = Cookies.get(key)!;
    setValue(cookieValue);
  };

  const removeItem = (key: string) => {
    Cookies.remove(key);
    setValue(null);
  };

  return { value, setItem, getItem, removeItem };
};

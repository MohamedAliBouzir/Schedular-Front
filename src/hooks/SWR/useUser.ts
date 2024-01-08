import { useContext } from 'react';
import Cookies from 'js-cookie';
import authContext from '../../contexts/authContext';
import { fetcher } from '../../helpers/helpers';

const useUser = () => {
  const { setUser, user } = useContext(authContext);
  const getUser = async () => {
    const data = await fetcher('http://localhost:3333/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-type': 'application/json', Authorization: Cookies.get('authToken')! },
    });
    if (data) {
      setUser(data);
    }
  };
  const removeUser = () => {
    setUser(null);
  }
  return { getUser, removeUser, user };
};
export default useUser;

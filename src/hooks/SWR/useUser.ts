import { useContext } from 'react';
import authContext from '../../contexts/authContext';
import { fetcher } from '../../helpers/helpers';

const useUser = () => {
  const { setUser, user, authToken } = useContext(authContext);
  const getUser = async () => {
    const data = await fetcher(`${import.meta.env.VITE_BACK_URL}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-type': 'application/json', Authorization: authToken! },
    });
    if (data) {
      setUser(data);
    }
  };
  const removeUser = () => {
    setUser(null);
  };
  return { getUser, removeUser, user };
};
export default useUser;

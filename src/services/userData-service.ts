import { fetcher } from '../helpers/helpers';

export const getUserData = async (authToken: string) => {
  const userData = await fetcher(`${import.meta.env.VITE_BACK_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
      Authorization: authToken,
    },
  });
  if (userData) return userData;
  return null;
};

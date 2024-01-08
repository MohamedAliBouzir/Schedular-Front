/* eslint-disable react-hooks/rules-of-hooks */
import useAuth from '../hooks/SWR/useAuth';
import useUser from '../hooks/SWR/useUser';

const home = () => {
  const { logout } = useAuth();
  const { getUser, user } = useUser();
  return (
    <div>
      <button onClick={getUser} type='button'>
        see user
      </button>
      <div>{user?.email || 'none'}</div>
      <button onClick={logout} type='button'>
        logout
      </button>
    </div>
  );
};

export default home;

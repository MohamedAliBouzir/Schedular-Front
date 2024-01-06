/* eslint-disable react-hooks/rules-of-hooks */
import useAuth from '../hooks/SWR/useAuth';

const home = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout} type='button'>
        logout
      </button>
    </div>
  );
};

export default home;

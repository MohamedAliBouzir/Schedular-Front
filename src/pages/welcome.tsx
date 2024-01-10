/* eslint-disable react-hooks/rules-of-hooks */
import useAuth from '../hooks/useAuth';

const welcome = () => {
  const { logout, user } = useAuth();
  return (
    <div>
      <div>{user?.email || 'none'}</div>
      <button onClick={logout} type='button'>
        logout
      </button>
    </div>
  );
};

export default welcome;

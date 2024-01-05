import { AuthState } from '../contexts/authReducer';
import { UserData } from '../type/UserData-type';

export interface AuthContext {
  authState: AuthState;
  globalLogInDispatch: (props: UserData) => void;
  globalLogOutDispatch: () => void;
}

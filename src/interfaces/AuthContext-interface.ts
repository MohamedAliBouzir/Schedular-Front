import { TUserDataProps } from '../type/UserData-type';

export interface IAuthContextProps {
  user: TUserDataProps | null;
  setUser: (props: TUserDataProps | null) => void;
  authToken: string | null;
  setAuthToken: (props: string | null) => void;
}

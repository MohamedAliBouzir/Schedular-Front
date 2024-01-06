export interface IAuthContextProps {
  authToken: string | null;
  setAuthToken: (props: string | null) => void;
}

export type AuthData = {
  success: boolean;
  user: {
    user_id: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    created_at: string;
    updated_at: string;
    auth_token: string;
  };
};

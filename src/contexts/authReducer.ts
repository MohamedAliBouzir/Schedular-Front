import { Reducer } from 'react';
import { AuthAction } from '../type/authActions-type';

export interface AuthState {
  isLoggedIn: boolean;
  authToken?: string;
  userId?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const defaultAuthState: AuthState = {
  isLoggedIn: false,
};

const authReducer: Reducer<AuthState, AuthAction> = (state, action) => {
  if (action.type === 'LOG_IN') {
    localStorage.setItem('user', JSON.stringify(action.payload));
    return {
      ...state,
      isLoggedIn: true,
      authToken: action.payload.authToken,
      userId: action.payload.userId,
      email: action.payload.email,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      phoneNumber: action.payload.phoneNumber,
      createdAt: action.payload.createdAt,
      updatedAt: action.payload.updatedAt,
    };
  }
  if (action.type === 'LOG_OUT') {
    localStorage.removeItem('user');
    return defaultAuthState;
  }
  return defaultAuthState;
};

export default authReducer;

import { UserDto } from 'generated';
import { createContext, useState } from 'react';

type AuthContextType = {
  token: string | null;
  user: UserDto | null;
  setLocalData: (user: UserDto, token: string) => void;
  removeLocalData: () => void;
};

const getLocalStorage = (name: string): any =>
  JSON.parse(localStorage.getItem(name.toString())!);

const removeLocalStorage = (name: string) => localStorage.removeItem(name);

const saveLocalStorage = (name: string, data: UserDto | string | null) =>
  localStorage.setItem(name, JSON.stringify(data));

export const useAuthData = () => {
  const [token, setToken] = useState<string | null>(
    getLocalStorage('token') || null,
  );
  const [user, setUser] = useState<UserDto | null>(
    getLocalStorage('user') || null,
  );

  const setLocalData = (user: UserDto, token: string) => {
    saveLocalStorage('user', user);
    saveLocalStorage('token', token);

    setUser(user);
    setToken(token);
  };

  const removeLocalData = () => {
    removeLocalStorage('user');
    removeLocalStorage('token');

    setUser(null);
    setToken(null);
  };

  return {
    removeLocalData,
    setLocalData,
    token,
    user,
  };
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

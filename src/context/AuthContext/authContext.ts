import { UserDto } from 'generated';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

type AuthContextType = {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
  user: UserDto | undefined;
  setUser: Dispatch<SetStateAction<UserDto | undefined>>;
};

const getLocalStorage = (name: string) => {
  localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)!) : null;
};

const saveLocalStorage = (data: UserDto, name: string) =>
  localStorage.setItem(name, JSON.stringify(data));

export const useAuthData = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserDto | undefined>();

  return {
    token,
    setToken,
    user,
    setUser,
  };
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

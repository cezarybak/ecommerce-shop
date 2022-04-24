import { AuthContext } from 'context/AuthContext/authContext';
import { useContext } from 'react';

export const useAuth = () => {
  const data = useContext(AuthContext);
  return data!;
};

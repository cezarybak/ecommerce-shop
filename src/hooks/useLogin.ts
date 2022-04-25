import { zodResolver } from '@hookform/resolvers/zod';
import { LoginUserDto, UsersService } from 'generated';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useAuth } from './useAuth';

const schema = z.object({
  username: z.string().min(3, { message: 'Required' }),
  password: z
    .string()
    .min(3, { message: 'Password must have at least 3 char' }),
});

export const useLogin = () => {
  const [errorStatus, setErrorStatus] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { setLocalData } = useAuth();
  const navigator = useNavigate();

  const {
    handleSubmit,
    control,

    formState: { isValid },
  } = useForm<LoginUserDto>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LoginUserDto) => {
    setLoading(true);
    UsersService.appControllerLogin(data)
      .then((e) => {
        setLoading(false);
        setLocalData(e.user, e.access_token);
        navigator('/');
      })
      .catch(() => {
        setErrorStatus(true);
        setLoading(false);
      });
  };

  return {
    isLoading,
    errorStatus,
    handleSubmit,
    control,
    isValid,
    onSubmit,
  };
};

import { Controller, useForm } from 'react-hook-form';
import hero from 'assets/hero.png';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LoginUserDto, UsersService } from 'generated';

import './style.scss';
import { useAuth } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from 'components';
import { useState } from 'react';

export const Login = () => {
  const navigator = useNavigate();
  const [errorStatus, setErrorStatus] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const schema = z.object({
    username: z.string().min(3, { message: 'Required' }),
    password: z
      .string()
      .min(3, { message: 'Password must have at least 3 char' }),
  });

  const {
    handleSubmit,
    control,

    formState: { isValid },
  } = useForm<LoginUserDto>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
  });

  const { token, setToken } = useAuth();

  const onSubmit = (data: LoginUserDto) => {
    setLoading(true);
    UsersService.appControllerLogin(data)
      .then((e) => {
        setLoading(false);
        setToken(e.access_token);
        navigator('/');
      })
      .catch((e) => {
        setErrorStatus(true);
        setLoading(false);
      });
  };

  return (
    <main className="login-page">
      <img alt="hero-image" src={hero} className="login-page__image" />
      <div className="login-wraper">
        <h3>join.tsh.io</h3>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <h2>Login</h2>
          <Controller
            control={control}
            name="username"
            render={({
              field: { onChange, value, ref, onBlur },
              fieldState: { error },
            }) => (
              <div className="input-wraper">
                <Input
                  error={errorStatus}
                  onBlur={onBlur}
                  type="text"
                  label="Username"
                  placeholder="Enter username"
                  setSearch={onChange}
                  search={value}
                  ref={ref}
                />
                {error?.message && <p>{error.message}</p>}
              </div>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({
              field: { onChange, value, ref, onBlur },
              fieldState: { error },
            }) => (
              <div className="input-wraper">
                <Input
                  error={errorStatus}
                  onBlur={onBlur}
                  type="password"
                  label="Password"
                  placeholder="Enter password"
                  setSearch={onChange}
                  search={value}
                  ref={ref}
                />
                {error?.message && <p>{error.message}</p>}
              </div>
            )}
          />
          <Button
            bg="white"
            value={isLoading ? 'Loading..' : 'Log in'}
            disabled={!isValid}
            type="submit"
          />

          <span>Forgot password?</span>
        </form>
      </div>
    </main>
  );
};

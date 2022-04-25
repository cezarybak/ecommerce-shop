import { Controller } from 'react-hook-form';
import hero from 'assets/hero.png';
import { useLogin } from 'hooks';
import { Button, Input } from 'components';

import './style.scss';

export const Login = () => {
  const { handleSubmit, onSubmit, control, errorStatus, isLoading, isValid } =
    useLogin();

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
            bg="purple"
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

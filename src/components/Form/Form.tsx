import { Button, Input } from 'components';
import { useLogin } from 'hooks';
import { Controller } from 'react-hook-form';

import './style.scss';

export const Form = () => {
  const { handleSubmit, onSubmit, control, errorStatus, isLoading, isValid } =
    useLogin();

  return (
    <form className="form" onSubmit={handleSubmit((data) => onSubmit(data))}>
      <h2>Login</h2>
      <div>
        <Controller
          control={control}
          name="username"
          render={({
            field: { onChange, value, ref, onBlur },
            fieldState: { error },
          }) => (
            <div>
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
              {error?.message && (
                <p className="message-error">{error.message}</p>
              )}
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
            <div>
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
              {error?.message && (
                <p className="message-error">{error.message}</p>
              )}
            </div>
          )}
        />
      </div>
      <Button
        bg="purple"
        value={isLoading ? 'Loading..' : 'Log in'}
        disabled={!isValid}
        type="submit"
      />
      <span>Forgot password?</span>
    </form>
  );
};

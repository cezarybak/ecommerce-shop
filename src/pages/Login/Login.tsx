import { useForm } from 'react-hook-form';
import hero from 'assets/hero.png';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LoginUserDto, UsersService } from 'generated';

import './style.scss';
import { useAuth } from 'hooks';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigator = useNavigate();

  const schema = z.object({
    username: z.string().min(1, { message: 'Required' }),
    password: z.string().min(4, { message: 'Saasas' }),
  });
  const { token, setToken } = useAuth();

  const onSubmit = (data: LoginUserDto) => {
    UsersService.appControllerLogin(data)
      .then((e) => {
        setToken(e.access_token);
        navigator('/');
      })
      .catch((e) => console.log(e));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserDto>({
    resolver: zodResolver(schema),
  });

  return (
    <main className="login-page">
      <img alt="hero-image" src={hero} className="login-page__image" />
      <div className="login-page__wraper">
        <h1 className="login-page__wraper__logo">join.tsh.io</h1>
        <h2 className="login-page__header">Login</h2>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <div>
            <label>
              Username
              <input
                {...register('username')}
                name="username"
                placeholder="Enter username"
              />
            </label>
            {errors.username?.message && <p>{errors.username?.message}</p>}
          </div>
          <div>
            <label>
              Password
              <input
                {...register('password')}
                name="password"
                type="password"
                placeholder="Enter password"
              />
            </label>
            {errors.password?.message && <p>{errors.password?.message}</p>}
          </div>
          <button type="submit">submit</button>
          <span>Forgot password?</span>
        </form>
      </div>
    </main>
  );
};

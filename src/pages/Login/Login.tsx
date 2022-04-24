import { useForm } from 'react-hook-form';
import hero from 'assets/hero.png';
import './style.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LoginUserDto, UsersService } from 'generated';

export const Login = () => {
  const schema = z.object({
    username: z.string().min(1, { message: 'Required' }),
    password: z.string().min(4, { message: 'Saasas' }),
  });

  const onSubmit = (data: LoginUserDto) => {
    UsersService.appControllerLogin(data)
      .then((e) => localStorage.setItem('auth', e.access_token))
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

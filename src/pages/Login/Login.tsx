import hero from 'assets/hero.png';
import { Form } from 'components';

import './style.scss';

export const Login = () => {
  return (
    <main className="login-page">
      <img alt="hero-image" src={hero} />
      <div>
        <h3>join.tsh.io</h3>
        <Form />
      </div>
    </main>
  );
};

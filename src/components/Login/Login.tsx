import { useState } from 'react';
import axios from 'axios';

function Login({ setUser }) {

  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('test');

  const [loginResults, setLoginResults] = useState('');

  const login = (e) => {
    e.preventDefault();

    const payload = {
      email,
      password
    };

    axios({
      method: 'POST',
      url: '/api/v1/passwords/login',
      data: payload,
    })
      .then((res) => {
        setEmail('');
        setPassword('');

        setUser(res.data);

        setLoginResults(
          JSON.stringify(
            res.data,
          )
        );
      })
      .catch((err) => {
        console.log('err', err);
        alert(err.response.data.message);
        setLoginResults(JSON.stringify(err.response.data.message));
      });
  };

  return (
    <>
      <section>
        <h2>Login Form</h2>

        <form onSubmit={login}>

          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="you@domain.com" required autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="l*O9l(lnF56So^O" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit">Login</button>
        </form>
      </section>

      <section>
        <h2>Login Results</h2>

        <p>{loginResults}</p>

      </section>
    </>
  );
}

export default Login;

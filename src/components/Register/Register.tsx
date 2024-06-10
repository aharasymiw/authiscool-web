import { useState } from 'react';
import axios from 'axios';

function Register({ setUser }) {

  const [firstName, setFirstName] = useState('test');
  const [lastName, setLastName] = useState('test');
  const [displayName, setDisplayName] = useState('test');
  const [email, setEmail] = useState('test@example.com');
  const [phone, setPhone] = useState('555-555-5555');
  const [password, setPassword] = useState('test');

  const [registerResults, setRegisterResults] = useState('');

  const register = (e) => {
    e.preventDefault();

    const payload = {
      firstName,
      lastName,
      displayName,
      email,
      phone,
      password
    };

    axios({
      method: 'POST',
      url: '/api/v1/passwords/register',
      data: payload,
    })
      .then((res) => {
        setFirstName('');
        setLastName('');
        setDisplayName('');
        setEmail('');
        setPhone('');
        setPassword('');

        setUser(res.data);

        setRegisterResults(res.data.message);
      })
      .catch((err) => {
        console.log('err', err);
        alert(err.response.data.message);
        setRegisterResults(JSON.stringify(err.response.data.message));
      });
  };

  return (
    <>
      <section>
        <h2>Registration Form</h2>

        <form onSubmit={register}>

          <label htmlFor="first_name">First Name</label>
          <input type="text" name="first_name" placeholder="Robert" required autoComplete="given-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

          <label htmlFor="last_name">Last Name</label>
          <input type="text" name="last_name" placeholder="Alice" required autoComplete="family-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

          <label htmlFor="display_name">Display Name</label>
          <input type="text" name="display_name" placeholder="secure👍🏻user_01" required value={displayName} onChange={(e) => setDisplayName(e.target.value)} />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="you@domain.com" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" placeholder="555-123-4567" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" autoComplete="tel-national" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="l*O9l(lnF56So^O" required autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit">Register</button>
        </form>

      </section>

      <section>
        <h2>Registration Results</h2>

        <p>{registerResults}</p>
      </section>
    </>
  );
}

export default Register;

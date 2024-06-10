import { useState } from 'react';
import axios from 'axios';

function ChangePassword({ user }) {

  const [email, setEmail] = useState('test@example.com');
  const [currentPassword, setCurrentPassword] = useState('test');
  const [newPassword, setNewPassword] = useState('test');
  const [confirmPassword, setConfirmPassword] = useState('test');

  const [changePasswordResults, setChangePasswordResults] = useState('');

  const change_password = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert(
        'The value of \'New Password\' and \'Confirm New Password\' must be the same',
      );
      return;
    }

    const payload = {
      email,
      currentPassword,
      newPassword
    };

    axios({
      method: 'PUT',
      url: `/api/v1/passwords/reset/${user.id}`,
      data: payload,
    })
      .then((res) => {
        setEmail('');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');

        setChangePasswordResults(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log('err', err);
        alert(err.response.data.message);
        setChangePasswordResults(JSON.stringify(err.response.data.message));
      });
  }

  return (
    <>
      <section>
        <h2>Change Password Form</h2>

        <form onSubmit={change_password}>

          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="you@domain.com" required autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="current_password">Current Password</label>
          <input type="password" name="current_password" placeholder="l*O9l(lnF56So^O" required autoComplete="current-password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />

          <label htmlFor="new_password">New Password</label>
          <input type="password" name="new_password" placeholder="osd*8lisOIk4l" required autoComplete="new-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

          <label htmlFor="confirm_password">Confirm New Password</label>
          <input type="password" name="confirm_password" placeholder="osd*8lisOIk4l" required autoComplete="new-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          <button type="submit">Change Password</button>
        </form>
      </section>

      <section>
        <h2>Change Password Results</h2>

        <p>{changePasswordResults}</p>
      </section>
    </>
  );
}


export default ChangePassword;

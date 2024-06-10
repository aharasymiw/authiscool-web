import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
// import Poll from './components/Poll/Poll';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Home from './components/Home/Home';
// import Passkey from './components/Passkey/Passkey';
import Resources from './components/Resources/Resources';
import NoMatch from './components/NoMatch/NoMatch.tsx';

import './App.css';

function App() {

  const [user, setUser] = useState({});

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/change-password" element={<ChangePassword user={user} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          {/* <Route path="/poll" element={<Poll user={user} />} /> */}
          {/* <Route path="/passkey" element={<Passkey user={user} setUser={setUser}/>} /> */}
          <Route path="/resources" element={<Resources user={user} />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

import { useState } from 'react';

import './Header.css';
import Navbar from './Navbar';

import toggleOnImg from './assets/toggle-on-solid.svg';
import toggleOffImg from './assets/toggle-off-solid.svg';

function Header() {

  const [isDarkmode, setIsDarkmode] = useState(false);

  const bodyEl = document.querySelector("body");

  function toggle_darkmode() {
    bodyEl.classList.toggle("darkmode");
    setIsDarkmode(!isDarkmode);
  }

  return (
    <header>
      <div id="mode_toggle" onClick={toggle_darkmode}>{isDarkmode ? <img className="light" src={toggleOnImg} /> : <img className="light" src={toggleOffImg} />}</div>
      <Navbar isDarkmode={isDarkmode} />
    </header>
  );
}

export default Header;

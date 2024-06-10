import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';

import barsSolidImg from './assets/bars-solid.svg';

function Nav({ isDarkmode }) {

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (

    <nav>

      <Link to="/" className="title" onClick={() => { setMenuIsOpen(false) }}>Home</Link>

      <div className="menu" onClick={() => { setMenuIsOpen(!menuIsOpen) }}>
        {isDarkmode ? <img className="light" src={barsSolidImg} /> : <img className="light" src={barsSolidImg} />}
      </div>

      <ul className={menuIsOpen ? "open" : ""} onClick={() => { setMenuIsOpen(false) }}>
        <li>
          <NavLink to="/register" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >
            Register
          </NavLink>
        </li>

        <li>
          <NavLink to="/login" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >
            Login
          </NavLink>
        </li>

        <li>
          <NavLink to="/change-password" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >
            Change Password
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >
            Profile
          </NavLink>
        </li>

        <li>
          <NavLink to="/poll" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >
            Poll
          </NavLink>
        </li>

        <li>
          <NavLink to="/passkey" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >
            Passkey
          </NavLink>
        </li>

        {/* Call to action */}
        <li>
          <NavLink to="/resources" className={({ isActive, isPending }) =>
            isPending ? "pending  nav_cta" : isActive ? "active  nav_cta" : " nav_cta"
          }
          >
            Resources
          </NavLink>
        </li>
      </ul>

    </nav>
  );
}

export default Nav;

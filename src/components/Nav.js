import React from "react";

const Nav = () => {
  return (
    <nav>
      <svg viewBox="0 0 50 50" className="scroll-progress-circle">
        <path d="M25 25 m0 -20 a20 20 0 1 0 0 40 a20 20 0 1 0 0 -40" />
      </svg>
      <ul>
        <li>
          <a href="#section-1" className="navstyle1">Home
          </a>
        </li>
        <li>
          <a href="#section-2" className="navstyle">Services</a>
        </li>
        <li>
          <a href="#section-3" className="navstyle">Team</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

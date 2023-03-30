import React from "react";
import "./header.scss";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#home">
            <img
              src="https://fastly.picsum.photos/id/661/200/200.jpg?hmac=pTRumV7JHMWLu9tuOU6quaMWqF-oxcymEOAvPNfXG4I"
              alt="logo"
            />
          </a>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Presentation</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* <div className="menu">
          <svg
            class="menu-icon"
            viewBox="0 0 100 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div> */}
      </nav>
    </header>
  );
}

export default Header;

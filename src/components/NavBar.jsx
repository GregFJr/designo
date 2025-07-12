import React from "react";
import logoDark from '../assets/shared/desktop/logo-dark.png';


function NavBar() {
  return (
    <nav>
      <section className="logo">
        <img src={logoDark} alt="Dark logo" />
      </section>
      <section className="navLinks">
        <ul>
          <li>Our Company</li>
          <li>Location</li>
          <li>Contact</li>
        </ul>
      </section>
    </nav>
  );
}

export default NavBar;

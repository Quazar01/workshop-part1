import React from "react";
import logo from "../assets/Lexicon.svg";

const Navbar = () => {
  const navbarLinks = [
    { id: 1, name: "Login", href: "#" },
    { id: 2, name: "Sign Up", href: "#" },
    { id: 3, name: "About", href: "#" },
  ];

  const renderNavbarLinks = () => {
    const listItems = navbarLinks.map((link) => {
      const liElement = (
        <li className="nav-item" id={link.id}>
          <a className="nav-link" href={link.href}>
            {link.name}
          </a>
        </li>
      );
      return liElement;
    });

    return listItems;
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
    <img src={logo} alt="Lexicon" />
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        {renderNavbarLinks()}
    </ul>
  </div>
</nav>
  );
};

export default Navbar;

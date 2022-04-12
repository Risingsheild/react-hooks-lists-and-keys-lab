import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <a key={links.id} href="#home">home</a>
      <a key={links.id} href="#about">about</a>
      <a key={links.id} href="#projects">projects</a>
    </nav>
  )
}

export default NavBar;

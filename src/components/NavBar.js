import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // <a href="#home">home</a>
  // Make sure each <a> element also gets a unique key prop.
  const eachLink= links.map((link) => <a key={link} href={"#" + link}>{link}</a>)

  return <nav>{eachLink}</nav>;
}

export default NavBar;

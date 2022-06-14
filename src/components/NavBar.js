import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aLinks = links.map((link) => {
    const linkTag = `#${link}`
    return <a key={link} href={linkTag}>{link}</a>
  })

  return <nav>{aLinks}</nav>;
}

export default NavBar;

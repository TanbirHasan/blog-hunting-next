import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="mainmenu">
          <Link href="/" className="link">
            <li>Home</li>
          </Link>
          <Link href="/about" className="link">
            <li>About</li>
          </Link>
          <Link href="/blog" className="link">
            <li>Blog</li>
          </Link>
          <Link href="/contact" className="link">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

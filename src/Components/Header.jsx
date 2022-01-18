import { Link } from "react-router-dom";

export default function Header() {
  // let closeNav = 0;

  return (
    <header className="lateral-padding">
      <nav className="flex-container">
        <div className="expanded-screen flex-container black lateral-padding padding-top-bottom">
          <a href="#about">
            <div>About()</div>
          </a>
          <a href="#works">
            <div>Works()</div>
          </a>
          <a href="#contact">
            <div>Contact()</div>
          </a>
        </div>
        <div className="small-screen padding-top-bottom">
          <div className="icon-frame">
            <img
              src="https://img.icons8.com/material-outlined/50/000000/menu--v1.png"
              // onClick={
              // closeNav()
              // }
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

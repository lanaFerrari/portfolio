import { Link } from "react-router-dom";

export default function Header() {
  // let closeNav = 0;

  return (
    <header className="lateral-padding bg-beige">
      <nav className="flex-container">
        <div className="expanded-screen flex-container s-font lateral-padding padding-top-bottom">
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
        <div className="small-screen">
          <div className="icon-frame">
            <img
              src={require("../imgs/icons/menu.png")}
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

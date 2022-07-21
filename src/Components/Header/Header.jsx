import "./Header.scss";

export default function Header(props) {
  const { isCollapsed, setIsCollapsed } = props;

  return (
    <header>
      <nav className="s-font">
        <ul className="no-display-ss">
          <li>
            <a href="#about">About()</a>
          </li>
          <li>
            <a href="#works">Works()</a>
          </li>
          <li>
            <a href="#contact">Contact()</a>
          </li>
        </ul>
      </nav>
      <div className="no-display-bs">
        <img
          className="icon-frame"
          src={require("../../imgs/icons/menu.png")}
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>
    </header>
  );
}

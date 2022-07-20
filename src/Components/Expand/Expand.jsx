import "./Expand.scss";

export default function Expand(props) {
  return (
    <section className="expand s-font flex-end">
      <a href="#about">
        <div className="padding-menu">About()</div>
      </a>

      <a href="#works">
        <div className="padding-menu">Works()</div>
      </a>

      <a href="#contact">
        <div className="padding-menu">Contact()</div>
      </a>
    </section>
  );
}
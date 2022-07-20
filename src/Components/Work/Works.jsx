import db from "../../db/db";
import "./Work.scss";

export default function Works() {
  return (
    <section
      id="works"
      className="lateral-padding padding-right-left padding-top-bottom panel"
      data-color="white"
    >
      <h2 className="padding-top-bottom">Projects</h2>
      <div>
        {db.map((project, index) => {
          return (
            <div key={index} className="two-c-grid line-bottom animation">
              <div className={project.classOne}>
                <div className="frame-works box-shadow">
                  <img
                    src={require("../../imgs/" + project.photo)}
                    alt={project.title}
                  />
                </div>
              </div>
              <div className="justify-content">
                <h3 className="align-center padding-top">{project.title}</h3>
                <p className="big-screen s-font">{project.description}</p>
                <div className="flex-c padding-top">
                  {project.tech.map((tec, index) => {
                    return (
                      <p className="s-font" key={index}>
                        {tec}
                      </p>
                    );
                  })}
                </div>

                <div className="flex align padding-top padding-top-bottom">
                  <a href={project.code} target="_blank">
                    <img
                      src={require("../../imgs/icons/deploy.png")}
                      alt="Link to Deployed Website"
                      className="icon-frame-two"
                    />
                  </a>

                  <a href={project.deploy} target="_blank">
                    <img
                      src={require("../../imgs/icons/code.png")}
                      alt="Link to source code"
                      className="icon-frame-two"
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

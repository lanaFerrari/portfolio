import db from "../../db/db";
import "./Work.scss";

export default function Works() {
  return (
    <section className="works panel" data-color="white">
      <h2>Projects</h2>
      <div>
        {db.map((project, index) => {
          return (
            <div key={index} className="works__item two-c-grid">
              <div className={project.classOne}>
                <div className="works__item__img">
                  <img
                    src={require("../../imgs/" + project.photo)}
                    alt={project.title}
                  />
                </div>
              </div>
              <div className="works__item__content">
                <h3>{project.title}</h3>
                <p className="no-display-ss">{project.description}</p>

                <div className="works__item__content__tec">
                  {project.tech.map((tec, index) => {
                    return (
                      <p className="s-font" key={index}>
                        {tec}
                      </p>
                    );
                  })}
                </div>

                <div className="works__item__content__tec__links">
                  <a href={project.code} target="_blank" rel="noreferrer">
                    <img
                      src={require("../../imgs/icons/deploy.png")}
                      alt="Link to Deployed Website"
                    />
                  </a>

                  <a href={project.deploy} target="_blank" rel="noreferrer">
                    <img
                      src={require("../../imgs/icons/code.png")}
                      alt="Link to source code"
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

import Contact from "./Contact";
import Profile from "./Profile";

export default function About() {
  const techStack = [
    "react",
    "js",
    "sass",
    "node",
    "postgre",
    "typescript",
    "npm",
    "git",
    "java",
    "python",
    "database",
    "command",
  ];

  return (
    <>
      <section
        id="techstack"
        className="lateral-padding padding-right-left padding-top-bottom panel"
        data-color="baby-blue"
      >
        <h2 className="padding-top-bottom">Tech Stack</h2>
        <div class="justify-center padding-top-bottom">
          <div className="responsive-grid-icons box-size justify-center padding-top-bottom">
            {techStack.map((tech, index) => {
              return (
                <div key={index} className="tech-frame">
                  <img
                    src={require("../imgs/icons/" + tech + ".png")}
                    alt={tech}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Profile />
      <Contact />
    </>
  );
}

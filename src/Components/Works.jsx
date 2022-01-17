import react from "react";
import { Link } from "react-router-dom";

export default function Works() {
  const db = [
    {
      classOne: "left",
      classTwo: "right",
      photo: "checkers.jpg",
      title: "Checkers Game",
      description:
        "Website to practice authentication using Bcrypt and Token where the user can also play checkers",
      tech: {
        react: "react",
        node: "node",
        js: "js",
        postgreSQL: "postgreSQL",
      },
      code: "https://github.com/lanaFerrari/boolean-uk-final-solo-project-server",
      deploy: "https://boolean-checkers-web.herokuapp.com/",
    },
    {
      classOne: "right",
      classTwo: "left",
      photo: "donation.jpg",
      title: "Donation Website",
      description:
        "Website where the user can perfom full CRUD and navigate through the pages",
      tech: {
        react: "react",
        node: "node",
        js: "js",
        postgreSQL: "postgreSQL",
      },
      code: "https://github.com/lanaFerrari/boolean-uk-final-group-project-client",
      deploy: "https://laravi.herokuapp.com/",
    },
    {
      classOne: "left",
      classTwo: "right",
      photo: "spotify.png",
      title: "Spotify HomePage",
      description: "Website to practice accessibility and responsiveness",
      tech: {
        html: "html",
        css: "css",
      },
      code: "https://github.com/lanaFerrari/boolean-uk-html-spotify",
      deploy: "https://google.com",
    },
  ];

  return (
    <section className="lateral-padding">
      <h2>Works</h2>
      {db.map((project, index) => {
        return (
          <div key={index}>
            <div className={project.classOne}>
              <div className="frame-works">
                <img
                  src={require("../imgs/" + project.photo)}
                  alt={project.title}
                />
              </div>
            </div>
            <div className={project.classTwo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a href={project.code} target="_blank">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/source-code.png"
                  alt="Link to Deployed Website"
                />
              </a>

              <a href={project.deploy} target="_blank">
                <img
                  src="https://img.icons8.com/ios/50/000000/rocket--v1.png"
                  alt="Link to source code"
                />
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}
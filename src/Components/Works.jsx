export default function Works() {
  const db = [
    {
      classOne: "left",
      classTwo: "right",
      photo: "checkers.jpg",
      title: "Checkers Game",
      description:
        "Website to practice authentication using Bcrypt and Token where the user can also play checkers.",
      tech: ["React", "Node.js", "Javascript", "PostgreSQL"],
      code: "https://github.com/lanaFerrari/boolean-uk-final-solo-project-server",
      deploy: "https://boolean-checkers-web.herokuapp.com/",
    },
    {
      classOne: "right",
      classTwo: "left",
      photo: "donation.jpg",
      title: "Donation Website",
      description:
        "Website where the user can perfom full CRUD and navigate through the pages.",
      tech: ["React", "Node.js", "Javascript", "PostgreSQL"],
      code: "https://github.com/lanaFerrari/boolean-uk-final-group-project-client",
      deploy: "https://laravi.herokuapp.com/",
    },
    {
      classOne: "left",
      classTwo: "right",
      photo: "spotify.png",
      title: "Spotify HomePage",
      description: "Website to practice accessibility and responsiveness.",
      tech: ["HTML", "CSS"],
      code: "https://github.com/lanaFerrari/boolean-uk-html-spotify",
      deploy: "https://google.com",
    },
    {
      classOne: "right",
      classTwo: "left",
      photo: "artexibit.png",
      title: "Artist Exhibition",
      description:
        "Practice writing models with relationships for an API of an artist exhibition management service.",
      tech: ["HTML", "CSS"],
      code: "https://github.com/lanaFerrari/boolean-uk-api-artist-exhibition",
      deploy: "https://google.com",
    },
  ];

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
                    src={require("../imgs/" + project.photo)}
                    alt={project.title}
                  />
                </div>
              </div>
              <div className="justify-content">
                <h3 className="align-center padding-top">{project.title}</h3>
                <p className="description s-font">{project.description}</p>
                <div className="flex-c padding-top">
                  {project.tech.map((tec, index) => {
                    return <p className="s-font">{tec}</p>;
                  })}
                </div>

                <div className="flex align padding-top padding-top-bottom">
                  <a href={project.code} target="_blank">
                    <img
                      src={require("../imgs/icons/deploy.png")}
                      alt="Link to Deployed Website"
                      className="icon-frame-two"
                    />
                  </a>

                  <a href={project.deploy} target="_blank">
                    <img
                      src={require("../imgs/icons/code.png")}
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

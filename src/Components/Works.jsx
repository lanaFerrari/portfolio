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
    <section
      id="works"
      className="lateral-padding padding-right-left padding-top-bottom panel"
      data-color="white"
    >
      <h2 className="padding-top-bottom">Projects</h2>
      <div className="">
        {db.map((project, index) => {
          return (
            <div
              key={index}
              className="two-c-grid padding-top-bottom line-bottom"
            >
              <div className={project.classOne}>
                <div className="frame-works box-shadow">
                  <img
                    src={require("../imgs/" + project.photo)}
                    alt={project.title}
                  />
                </div>
              </div>
              <div className="padding-top-bottom justify-content">
                <h3 className="m-font align-center">{project.title}</h3>
                <p className="description">{project.description}</p>

                <div className="flex align">
                  <div>
                    <a href={project.code} target="_blank">
                      <img
                        src="https://img.icons8.com/ios-filled/50/000000/source-code.png"
                        alt="Link to Deployed Website"
                        className="icon-frame-two "
                      />
                    </a>
                  </div>
                  <div>
                    <a href={project.deploy} target="_blank">
                      <img
                        src="https://img.icons8.com/ios/50/000000/rocket--v1.png"
                        alt="Link to source code"
                        className="icon-frame-two"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

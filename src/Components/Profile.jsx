export default function Profile() {
  return (
    <section
      id="about"
      className="lateral-padding padding-right-left padding-top-bottom panel"
      data-color="black"
    >
      <div className="padding-top-bottom">
        <h2 className="padding-top-bottom">About</h2>
        <div>
          <div className=" border padding-top-bottom padding-right-left pink-bg">
            {/* <img
            src={require("../imgs/clouds.jpg")}
            alt=""
            className="bg-clouds"
          /> */}
            <div className="flex bg-clouds padding-top-bottom padding-right-left">
              <div className="align-center">
                <p className="frame-profile">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur aut aliquid repellat sekjaDNJS.
                </p>
              </div>
              <div className="frame-profile">
                <img
                  src={require("../imgs/profile.png")}
                  alt="Blong girl icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

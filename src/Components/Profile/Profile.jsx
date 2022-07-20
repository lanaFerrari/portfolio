export default function Profile() {
  document.addEventListener("DOMContentLoaded", function (event) {
    var dataText = ["Call", "DM", "E-mail", "Message", "Shout"];

    function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
        document.querySelector(".call-me").innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 300);
      } else if (typeof fnCallback == "function") {
        setTimeout(fnCallback, 700);
      }
    }

    function StartTextAnimation(i) {
      if (typeof dataText[i] == "undefined") {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 2000);
      }

      if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function () {
          StartTextAnimation(i + 1);
        });
      }
    }

    StartTextAnimation(0);
  });

  return (
    <section
      id="about"
      className="lateral-padding padding-right-left  panel"
      data-color="green"
    >
      <h2 className="padding-top-bottom">About ------- ⫸</h2>

      <div className="justify-center">
        <div className="border grid-template padding-top-bottom padding-right-left">
          <div className="invite-frame box-shadow">
            <div className="frame-video">
              <img
                src={require("../../imgs/thankyou.gif")}
                alt="Thank you gif"
              />
            </div>
          </div>

          <div className="profile-frame box-shadow">
            <img
              src={require("../../imgs/profile.png")}
              alt="Blong girl icon"
            />
          </div>

          <div className="about-frame box-shadow padding-top">
            <div className="second-frame">
              <p className="white-c m-font padding-right-left-two padding-top-bottom">
                I code because I failed to be an astronaut.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-content">
        <div className="flex padding-top-bottom">
          <a href="https://github.com/lanaFerrari" target="_blank">
            <img
              src="https://img.icons8.com/nolan/50/github.png"
              className="icon-frame-three"
            />
          </a>

          <a href="https://www.linkedin.com/in/lanaferrari/" target="_blank">
            <img
              src="https://img.icons8.com/nolan/50/linkedin-circled.png"
              className="icon-frame-three"
            />
          </a>
          <img
            src="https://img.icons8.com/nolan/50/email-sign.png"
            className="icon-frame-three"
          />
        </div>
      </div>
    </section>
  );
}

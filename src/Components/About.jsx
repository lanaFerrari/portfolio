import $ from "jquery";

export default function About() {
  $(window)
    .scroll(function () {
      // selectors
      var $window = $(window),
        $body = $("article"),
        $panel = $(".panel");

      // Change 33% earlier than scroll position so colour is there when you arrive.
      var scroll = $window.scrollTop() + $window.height() / 3;

      $panel.each(function () {
        var $this = $(this);

        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if (
          $this.position().top <= scroll &&
          $this.position().top + $this.height() > scroll
        ) {
          // Remove all classes on body with color-
          $body.removeClass(function (index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
          });

          // Add class of currently active div
          $body.addClass("color-" + $(this).data("color"));
        }
      });
    })
    .scroll();

  return (
    <article className="lateral-padding">
      <div class="panel">
        <h2 className="">About</h2>
      </div>
      <div class="panel" data-color="violet">
        <h2>Violet panel</h2>
        <div className="flex">
          <div className="align-center">
            <p className="frame-profile">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              aut aliquid repellat sed eligendi.
            </p>
          </div>
          <div className="frame-profile">
            <img src={require("../imgs/profile.png")} alt="Blong girl icon" />
          </div>
        </div>
      </div>
      <div class="panel" data-color="indigo">
        <h2>Indigo panel</h2>
      </div>
      <div class="panel" data-color="blue">
        <h2>Blue panel</h2>
      </div>
      <div class="panel" data-color="green">
        <h2>Green panel</h2>
      </div>
      <div class="panel" data-color="yellow">
        <h2>Yellow panel</h2>
      </div>
      <div class="panel" data-color="orange">
        <h2>Orange panel</h2>
      </div>
      <div class="panel" data-color="red">
        <h2>Red panel</h2>
      </div>

      <div className="frame-gif">
        <img src={require("../imgs/thankyou.gif")} alt="Thank you gif" />
      </div>
    </article>
  );
}

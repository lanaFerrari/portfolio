import $ from "jquery";

export default function Footer() {
  // jquery(function ($) {
  //   $(window).scroll(function () {});
  // });

  $(window)
    .scroll(function () {
      // selectors
      var $window = $(window),
        $body = $("footer"),
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
    <footer>
      <div class="panel" data-color="white">
        <div>
          <h1>Magic scrolling colours</h1>
          <p>
            Scroll to animate the background colour of the footer as a full
            height panel becomes visible.
          </p>
          <p>
            I have tried to comment the code, particurly the JavaScript, as much
            as possible. I hope it's clear to understand.
          </p>
          <p>
            If you have any questions my twitter is{" "}
            <a href="https://twitter.com/daveredfern">@daveredfern</a>.
          </p>
        </div>
      </div>
      <div class="panel" data-color="violet">
        <h2>Violet panel</h2>
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
    </footer>
  );
}

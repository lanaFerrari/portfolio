import About from "./About";
import Home from "./Home";
import Works from "./Works";
import $ from "jquery";
import Expand from "./Expand";

export default function Main(props) {
  const { isCollapsed } = props;
  $(window)
    .scroll(function () {
      // selectors
      var $window = $(window),
        $body = $("main"),
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

          // $body.removeClass(function (index, css) {
          //   return (css.match(/(^|\s)eff-\S+/g) || []).join(" ");
          // });

          // Add class of currently active div
          $body.addClass("color-" + $(this).data("color"));

          // $body.addClass("eff-" + $(this).data("eff"));
        }
      });
    })
    .scroll();
  return (
    <main>
      {!isCollapsed && <Expand />}
      <Home />
      <Works />
      <About />
    </main>
  );
}

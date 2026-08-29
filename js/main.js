(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  var backdrop = document.querySelector(".nav-backdrop");

  if (toggle && nav && backdrop) {
    var closeNav = function () {
      nav.setAttribute("data-open", "false");
      backdrop.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    var openNav = function () {
      nav.setAttribute("data-open", "true");
      backdrop.setAttribute("data-open", "true");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };

    toggle.addEventListener("click", function () {
      var isOpen = nav.getAttribute("data-open") === "true";
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    backdrop.addEventListener("click", closeNav);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeNav();
      }
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
  }
})();

/* Stały pasek akcji na telefonie — pokazuje się po zjechaniu poniżej sekcji hero. */
(function () {
  "use strict";

  var bar = document.querySelector(".mobile-bar");
  if (!bar) { return; }

  var threshold = 320;
  var ticking = false;

  var update = function () {
    bar.setAttribute("data-visible", window.scrollY > threshold ? "true" : "false");
    ticking = false;
  };

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
})();

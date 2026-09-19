/* Stress Free Property Management — minimal progressive enhancement. No dependencies. */
(function () {
  "use strict";

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    var mq = window.matchMedia("(max-width: 960px)");

    function close() {
      nav.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    }

    function sync() {
      if (mq.matches) {
        close();
      } else {
        nav.hidden = false;
        toggle.setAttribute("aria-expanded", "false");
      }
    }

    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      nav.hidden = open;
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mq.matches && !nav.hidden) {
        close();
        toggle.focus();
      }
    });

    if (mq.addEventListener) {
      mq.addEventListener("change", sync);
    } else if (mq.addListener) {
      mq.addListener(sync);
    }
    sync();
  }

  // Enquiry form. TODO: point action= at a real endpoint (Formspree, Netlify Forms,
  // or the client's own handler) before this site goes live. Until then the submit
  // is intercepted so nothing is silently lost.
  var form = document.querySelector("[data-enquiry-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      if (!form.getAttribute("action")) {
        e.preventDefault();
        var note = form.querySelector("[data-form-status]");
        if (note) {
          note.textContent =
            "Demo build: this form is not connected to a mailbox yet. Please call 1-888-779-3121 or email info@stressfreepm.ca.";
          note.hidden = false;
          note.focus();
        }
      }
    });
  }
})();

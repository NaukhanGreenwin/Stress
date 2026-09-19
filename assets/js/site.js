/* Stress Free Property Management — progressive enhancement only. No dependencies. */
(function () {
  "use strict";

  /* ------------------------------------------------------------- nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    var mq = window.matchMedia("(max-width: 1000px)");

    function setOpen(open) {
      if (open) {
        nav.setAttribute("data-open", "");
      } else {
        nav.removeAttribute("data-open");
      }
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close the main menu" : "Open the main menu");
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (!mq.matches) return;
      if (toggle.getAttribute("aria-expanded") !== "true") return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      setOpen(false);
    });

    function sync() { setOpen(false); }
    if (mq.addEventListener) {
      mq.addEventListener("change", sync);
    } else if (mq.addListener) {
      mq.addListener(sync);
    }
    setOpen(false);
  }

  /* ------------------------------------------------ enquiry form ------- */
  /* TODO: point action= at a real endpoint (the client's own handler,
     Formspree, Netlify Forms) before launch. Until then the submit is
     intercepted so nothing is silently lost. */
  var form = document.querySelector("[data-enquiry-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      if (!form.getAttribute("action")) {
        e.preventDefault();
        var note = form.querySelector("[data-form-status]");
        if (note) {
          note.textContent =
            "This preview build is not connected to a mailbox yet. Please call 1-888-779-3121 or email info@stressfreepm.ca.";
          note.hidden = false;
          note.focus();
        }
      }
    });
  }
})();

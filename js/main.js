/* Noah Thomas portfolio: progressive enhancement only.
   The site is fully usable with this file disabled. */

// Mark JS as available so CSS can opt into JS-only behavior
// (mobile overlay nav, scroll reveal).
document.documentElement.classList.add("js");

// ---------- Mobile nav ----------
var navToggle = document.querySelector(".nav-toggle");
var navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close the overlay when a link is chosen or Escape is pressed.
  navLinks.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.focus();
    }
  });
}

// ---------- Scroll reveal ----------
var revealEls = document.querySelectorAll(".reveal");
var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!("IntersectionObserver" in window) || reducedMotion.matches) {
  revealEls.forEach(function (el) {
    el.classList.add("is-visible");
  });
} else {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // no re-trigger
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
}

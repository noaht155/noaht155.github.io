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

// ---------- Image carousel ----------
// Hero image and gallery share one rotating viewport per project page.
// Arrow keys are global since each page has at most one carousel.
var carousels = document.querySelectorAll("[data-carousel]");

carousels.forEach(function (carousel) {
  var figures = Array.prototype.slice.call(
    carousel.querySelectorAll(".carousel-figure")
  );
  var counter = carousel.querySelector(".carousel-counter");
  var prevBtn = carousel.querySelector(".carousel-arrow-prev");
  var nextBtn = carousel.querySelector(".carousel-arrow-next");
  var index = 0;

  if (figures.length <= 1) {
    carousel.classList.add("is-single");
    return;
  }

  function show(i) {
    index = (i + figures.length) % figures.length;
    figures.forEach(function (figure, j) {
      figure.classList.toggle("is-active", j === index);
    });
    if (counter) {
      counter.textContent = (index + 1) + " / " + figures.length;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      show(index - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      show(index + 1);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      show(index - 1);
    } else if (event.key === "ArrowRight") {
      show(index + 1);
    }
  });

  show(0);
});

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

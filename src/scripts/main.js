const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.15
  }
);

document
  .querySelectorAll(
    ".section,.stat,.project,.timeline-item,.expertise-grid article"
  )
  .forEach(element => {

    element.classList.add("fade-in");

    observer.observe(element);

  });


const menuToggle =
  document.getElementById("menuToggle");

const closeMenu =
  document.getElementById("closeMenu");

const mobileMenu =
  document.getElementById("mobileMenu");

menuToggle.addEventListener(
  "click",
  () => {

    mobileMenu.classList.add("active");

    document.body.classList.add("menu-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

  }
);

closeMenu.addEventListener(
  "click",
  () => {

    mobileMenu.classList.remove("active");

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  }
);

document
  .querySelectorAll(".mobile-nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }
    );

  });

// Back to top button functionality
const backBtn = document.querySelector('.back-to-top');
if (backBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backBtn.classList.add('show');
    } else {
      backBtn.classList.remove('show');
    }
  });
  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

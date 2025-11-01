(function () {
  "use strict";

  // Header toggle
  const headerToggleBtn = document.querySelector('.header-toggle');
  const header = document.querySelector('#header');

  function toggleHeader() {
    header.classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }

  if (headerToggleBtn) {
    headerToggleBtn.addEventListener('click', toggleHeader);
  }

  // Close header on nav link click (mobile)
  document.querySelectorAll('#navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (header.classList.contains('header-show')) {
        toggleHeader();
      }
    });
  });

  // Preloader
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  // Scroll-to-top button
  const scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add('active')
        : scrollTop.classList.remove('active');
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  // AOS animation
  function initAOS() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  window.addEventListener('load', initAOS);

  // Typed.js animation
  const typedElement = document.querySelector('.typed');
  if (typedElement) {
    const typedStrings = typedElement.getAttribute('data-typed-items');
    if (typedStrings) {
      new Typed('.typed', {
        strings: typedStrings.split(','),
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }

  // Scrollspy for nav links
  const navLinks = document.querySelectorAll('.navmenu a');

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 200;

    navLinks.forEach(link => {
      if (!link.hash) return;

      const section = document.querySelector(link.hash);
      if (!section) return;

      if (
        scrollPos >= section.offsetTop &&
        scrollPos <= section.offsetTop + section.offsetHeight
      ) {
        document.querySelectorAll('.navmenu a.active').forEach(active => {
          active.classList.remove('active');
        });
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('load', updateActiveNavLink);
  document.addEventListener('scroll', updateActiveNavLink);
})();
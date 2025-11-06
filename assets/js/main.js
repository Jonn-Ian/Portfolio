(function () {
  "use strict";

  // === Header toggle ===
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

  // === Close header on nav link click (mobile) ===
  document.querySelectorAll('#navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (header.classList.contains('header-show')) {
        toggleHeader();
      }
    });
  });

  // === Preloader ===
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  // === Scroll-to-top button ===
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

  // === AOS animation ===
  function initAOS() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  window.addEventListener('load', initAOS);

  // === Typed.js animation ===
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

  // === Scrollspy for nav links ===
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

  // === Dynamic Carousel Projects ===
  const projects = [
    {
      id: "carouselProject1",
      title: "POS System with Inventory Management and Data Analytics",
      description: "A responsive POS and analytics system with a focus on data-driven insights and sales tracking.",
      images: [
        "image.png",
        "image1.png",
        "image2.png",
        "image3.png",
        "image4.png",
      ]
    },
    {
      id: "carouselProject2",
      title: "Student Management System",
      description: "A PHP and MySQL-based web app for managing student records, grades, and attendance.",
      images: [
        "project2-1.jpg",
        "project2-2.jpg"
      ]
    },
    {
      id: "carouselProject3",
      title: "Data Dashboard",
      description: "Interactive dashboards using Power BI to visualize academic performance and trends.",
      images: [
        "project3-1.jpg",
        "project3-2.jpg"
      ]
    },
    {
      id: "carouselProject4",
      title: "Weather App",
      description: "A Python-based CLI tool that fetches real-time weather data using the OpenWeatherMap API.",
      images: [
        "project4-1.jpg",
        "project4-2.jpg"
      ]
    }
  ];

  const container = document.getElementById("projectsContainer");

  if (container) {
    projects.forEach(project => {
      const col = document.createElement("div");
      col.className = "col-lg-3 col-md-6";

      const card = document.createElement("div");
      card.className = "project-card";

      const carousel = document.createElement("div");
      carousel.className = "carousel slide";
      carousel.id = project.id;
      carousel.setAttribute("data-bs-ride", "carousel");

      const inner = document.createElement("div");
      inner.className = "carousel-inner";

      // ✅ Updated path here:
      project.images.forEach((imgName, index) => {
        const item = document.createElement("div");
        item.className = "carousel-item";
        if (index === 0) item.classList.add("active");

        const img = document.createElement("img");
        img.src = `assets/imgs/detour_cafe/${imgName}`; // ← Corrected path
        img.className = "d-block w-100";
        img.alt = `${project.title} Image ${index + 1}`;

        item.appendChild(img);
        inner.appendChild(item);
      });

      const prevBtn = document.createElement("button");
      prevBtn.className = "carousel-control-prev";
      prevBtn.type = "button";
      prevBtn.setAttribute("data-bs-target", `#${project.id}`);
      prevBtn.setAttribute("data-bs-slide", "prev");
      prevBtn.innerHTML = `<span class="carousel-control-prev-icon"></span>`;

      const nextBtn = document.createElement("button");
      nextBtn.className = "carousel-control-next";
      nextBtn.type = "button";
      nextBtn.setAttribute("data-bs-target", `#${project.id}`);
      nextBtn.setAttribute("data-bs-slide", "next");
      nextBtn.innerHTML = `<span class="carousel-control-next-icon"></span>`;

      carousel.appendChild(inner);
      carousel.appendChild(prevBtn);
      carousel.appendChild(nextBtn);

      const title = document.createElement("h4");
      title.className = "mt-3";
      title.textContent = project.title;

      const desc = document.createElement("p");
      desc.textContent = project.description;

      card.appendChild(carousel);
      card.appendChild(title);
      card.appendChild(desc);
      col.appendChild(card);
      container.appendChild(col);
    });
  }
})();

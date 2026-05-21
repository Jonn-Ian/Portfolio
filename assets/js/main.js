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
      title: "Data Analytics",
      description: "A Power BI dashboard project visualizing global Product Sales data for strategic insights.",
      images: [
        "imb.png",
        "d1.png"
      ]
    },
    {
      id: "carouselProject3",
      title: "tic tac toe game",
      description: "A python based tic tac toe game that allows a players to play against a computer",
      images: [
        "ttc1.png",
        "ttc2.png",
        "ttc3.png",
        "ttc4.png",
        "ttc5.png",
        "ttc6.png"
      ]
    },
    {
      id: "carouselProject5",
      title: "A Lightweight Generator",
      description: "A lightweight generator using python that generates words using random library for A.I studies.",
      images: [
        "generator.png"
      ]
    },
    {
      id: "carouselProject6",
      title: "ARIMA AR(1) model",
      description: "I built an AR(1) model from scratch, estimating the coefficient, checking residuals, and generating forecasts to understand ARIMA’s core mechanics.",
      images: [
        "ARIMA.png"
      ]
    }
  ];

    // === Dynamic Iframely Certifications ===
  const certifications = [
    {
      title: "HackerRank Certification",
      issued: "Nov 2025",
      url: "http://www.hackerrank.com/certificates/69db5a0fe69c",
      embed: "https://iframely.net/VqjIaNPs?theme=dark",
      padding: "52.356%"
    },
    {
      title: "Creating Charts and Dashboards using Tableau",
      issued: "Nov 2025",
      url: "https://courses.cognitiveclass.ai/certificates/4eaa54337da14a3c86ae928f055f32e2",
      embed: "https://iframely.net/AUqMLyNb?theme=dark",
      padding: "68.7447%"
    },
    {
      title: "Data Analysis with Python",
      issued: "Nov 2025",
      url: "https://courses.cognitiveclass.ai/certificates/49149aed35a14707a4810c92200e6a5f",
      embed: "https://iframely.net/ZmUv62XZ?theme=dark",
      padding: "68.7447%"
    },
    {
      title: "Python 101 for Data Science",
      issued: "Nov 2025",
      url: "https://courses.cognitiveclass.ai/certificates/02ee1f0f9cff4feca982e3c857553a85",
      embed: "https://iframely.net/NX3p8H80?theme=dark",
      padding: "68.7447%"
    },
    {
      title: "SQL and Relational Databases 101",
      issued: "Nov 2025",
      url: "https://courses.cognitiveclass.ai/certificates/92e010ca6ccd40dcb3e2a063e46dd501",
      embed: "https://iframely.net/2kG72E4W?theme=dark",
      padding: "68.7447%"
    }
  ];

  const certContainer = document.getElementById("certificationsContainer");

  if (certContainer) {
    certifications.forEach(cert => {
      const col = document.createElement("div");
      col.className = "col-md-4";

      const embed = document.createElement("div");
      embed.className = "iframely-embed";

      const responsive = document.createElement("div");
      responsive.className = "iframely-responsive";
      responsive.style.paddingBottom = cert.padding;
      responsive.style.paddingTop = "120px";

      const link = document.createElement("a");
      link.href = cert.url;
      link.setAttribute("data-iframely-url", cert.embed);

      responsive.appendChild(link);
      embed.appendChild(responsive);
      col.appendChild(embed);

      const caption = document.createElement("p");
      caption.className = "mt-2 text-center";
      caption.innerHTML = `<strong>${cert.title}</strong><br><small>Issued ${cert.issued}</small>`;
      col.appendChild(caption);

      certContainer.appendChild(col);
    });
  }

  // === Dynamic Carousel Projects ===
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
        img.src = `assets/imgs/${imgName}`;
        img.className = "d-block w-100";
        img.alt = `${project.title} Image ${index + 1}`;
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => openLightbox(img.src, project.title));

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
  // === Lightbox ===
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.innerHTML = `
    <button id="lightbox-close" aria-label="Close">&times;</button>
    <button id="lightbox-prev" aria-label="Previous">&#8249;</button>
    <img id="lightbox-img" src="" alt="" />
    <button id="lightbox-next" aria-label="Next">&#8250;</button>
    <p id="lightbox-caption"></p>
  `;
  document.body.appendChild(lightbox);

  let lightboxImages = [];
  let lightboxIndex = 0;

  function openLightbox(src, caption) {
    const carousel = document.querySelector(`[data-bs-ride]`);
    lightboxImages = Array.from(
      document.querySelectorAll(".carousel-item img")
    ).filter(img => {
      return img.closest(".carousel").querySelector(".carousel-item.active img") === img ||
        img.src === src ||
        lightboxImages.includes(img.src);
    });

    const allCarousels = document.querySelectorAll(".carousel");
    allCarousels.forEach(c => {
      const active = c.querySelector(".carousel-item.active img");
      if (active && active.src === src) {
        lightboxImages = Array.from(c.querySelectorAll(".carousel-item img"));
        lightboxIndex = lightboxImages.findIndex(img => img.src === src);
      }
    });

    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox-caption").textContent = caption;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = "";
  }

  function showLightboxImage(index) {
    if (!lightboxImages.length) return;
    lightboxIndex = (index + lightboxImages.length) % lightboxImages.length;
    document.getElementById("lightbox-img").src = lightboxImages[lightboxIndex].src;
  }

  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", () => showLightboxImage(lightboxIndex - 1));
  document.getElementById("lightbox-next").addEventListener("click", () => showLightboxImage(lightboxIndex + 1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display !== "flex") return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showLightboxImage(lightboxIndex - 1);
    if (e.key === "ArrowRight") showLightboxImage(lightboxIndex + 1);
  });

})();

document.addEventListener("DOMContentLoaded", function () {
  // Typed.js initialization
  new Typed("#typed", {
    strings: [
      "Full Stack Web Developer",
      "Data Analyst",
      "Problem Solver",
      "AI Enthusiast"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
  });

  // Background slideshow
  const hero = document.getElementById("hero");

  // Replace with your own image paths
  const images = [
    "assets/imgs/ARIMA.png",
    "assets/imgs/d1.png",
    "assets/imgs/image1.png",
    "assets/imgs/image2.png",
    "assets/imgs/image3.png",
    "assets/imgs/image4.png",
    "assets/imgs/imb.png"
  ];

  let current = 0;

  function changeBackground() {
    hero.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
  }

  // Initial background
  changeBackground();

  // Change every 6 seconds
  setInterval(changeBackground, 2000);
});
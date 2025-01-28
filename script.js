document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".toggle");
  const navMenu = document.querySelector(".nav");

  function updateHeaderOnScroll() {
    let scrollThreshold = window.innerWidth > 768 ? 100 : 50;

    if (window.scrollY > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateHeaderOnScroll);

  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation(); // Останавливаем всплытие события
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });

  document.querySelectorAll('.nav__list a').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        let headerOffset = window.innerWidth > 768 ? 80 : 50;
        let elementPosition = targetElement.offsetTop - headerOffset;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }

      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
});
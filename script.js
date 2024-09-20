const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu');
    });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
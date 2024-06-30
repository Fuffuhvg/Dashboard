document.addEventListener("DOMContentLoaded", function() {
    const themeToggler = document.getElementById('theme-toggler');
    const btnText = document.getElementById('btnText');
    const body = document.body;
    const btnIcon = document.getElementById('btnIcon');

    themeToggler.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      if (body.classList.contains('dark-theme')) {
        btnIcon.src = "img/sun.png";
        btnText.textContent = 'Light';
      } else {
        btnIcon.src = "img/moon.png";
        btnText.textContent = 'Dark';
      }
    });
  });
  
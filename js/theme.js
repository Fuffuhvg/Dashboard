document.addEventListener("DOMContentLoaded", function() {
    const themeToggler = document.getElementById('theme-toggler');
    const btnText = document.getElementById('btnText');
    const body = document.body;
  
    themeToggler.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      if (body.classList.contains('dark-theme')) {
        btnText.textContent = 'Light';
      } else {
        btnText.textContent = 'Dark';
      }
    });
  });
  
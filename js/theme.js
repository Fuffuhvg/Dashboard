document.addEventListener("DOMContentLoaded", function() {
  const themeToggler = document.getElementById('theme-toggler');
  const btnText = document.getElementById('btnText');
  const body = document.body;
  const btnIcon = document.getElementById('btnIcon');

  function applyTheme(theme) {
      console.log('Applying theme:', theme);  // Debug statement
      if (theme === 'dark') {
          body.classList.add('dark-theme');
          btnIcon.src = "img/sun.png";
          btnText.textContent = 'Light';
      } else {
          body.classList.remove('dark-theme');
          btnIcon.src = "img/moon.png";
          btnText.textContent = 'Dark';
      }
  }

  const savedTheme = localStorage.getItem('theme') || 'light';
  console.log('Saved theme:', savedTheme);  // Debug statement
  applyTheme(savedTheme);

  themeToggler.addEventListener('click', () => {
      const currentTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
      console.log('Toggling theme to:', currentTheme);  // Debug statement
      applyTheme(currentTheme);
      localStorage.setItem('theme', currentTheme);
  });
});

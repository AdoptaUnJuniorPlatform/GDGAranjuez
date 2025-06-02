document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleBtn = document.getElementById('theme-toggle');

  if (!toggleBtn) return;

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      body.classList.add('dark');
      toggleBtn.textContent = '🌙';
    } else {
      body.classList.remove('dark');
      toggleBtn.textContent = '☀️';
    }
  };

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  let currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(currentTheme);

  toggleBtn.addEventListener('click', () => {
    currentTheme = body.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
  });
});

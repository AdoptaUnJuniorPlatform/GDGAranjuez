// src/scripts/themeToggle.js
document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const themeBtn = document.getElementById('theme-toggle');

  const applyTheme = (isDark) => {
    if (themeBtn) {
      themeBtn.textContent = isDark ? '🌙' : '☀';
    }
    if (isDark) {
      html.classList.add('dark');
      toggleBtn.textContent = '🌙';
    } else {
      html.classList.remove('dark');
      toggleBtn.textContent = '☀';
    }
  };

  // Al cargar la página, aplica el tema guardado o por defecto
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  applyTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));

  // Toggle manual
  toggleBtn.addEventListener('click', () => {
    const isDark = html.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme === 'dark');
  });
});

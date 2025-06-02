document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  // Set icon al cargar la página según el estado actual
  toggleBtn.textContent = document.documentElement.classList.contains(
    'dark'
  )
    ? '🌙'
    : '☀️';

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    toggleBtn.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});

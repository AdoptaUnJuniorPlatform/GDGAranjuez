document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  // Función para establecer el icono según tema
  function updateIcon(isDark) {
    toggleBtn.innerHTML = `<img src="/icons/${isDark ? 'luna' : 'sol'}.png" alt="${isDark ? 'Luna' : 'Sol'}" class="w-6 h-6 inline-block" />`;
  }

  // Establecer ícono al cargar
  const isDark =
    document.documentElement.classList.contains('dark');
  updateIcon(isDark);

  toggleBtn.addEventListener('click', () => {
    const nowDark =
      document.documentElement.classList.toggle('dark');
    updateIcon(nowDark);
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
  });
});

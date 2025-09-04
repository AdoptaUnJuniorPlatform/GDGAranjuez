document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');

  if (!toggleBtn) return;

  // Función para establecer el icono según tema
  function updateIcon(isDark) {
    toggleBtn.innerHTML = `<img src="/icons/${isDark ? 'luna' : 'sol'}.webp" alt="${isDark ? 'Luna' : 'Sol'}" class="w-6 h-6 inline-block" />`;
  }

  // Función para cambiar el logo de Aranju
  function updateLogo(isDark) {
    const aranjuezLogo =
      document.getElementById('aranjuez-logo');
    if (!aranjuezLogo) return;

    aranjuezLogo.src = isDark
      ? '/patrocinadores/aranjuez-firma_blanco-01.webp'
      : '/patrocinadores/aranjuez-firma_negro-01.webp';
  }

  // Establecer icono y logo al cargar
  const isDark =
    document.documentElement.classList.contains('dark');
  updateIcon(isDark);
  updateLogo(isDark);

  toggleBtn.addEventListener('click', () => {
    const nowDark =
      document.documentElement.classList.toggle('dark');
    updateIcon(nowDark);
    updateLogo(nowDark);
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
  });
});

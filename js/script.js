document.addEventListener("DOMContentLoaded", () => {
    // small interactivity: mobile menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // fallback: accessible focus styles for keyboard users
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') document.documentElement.classList.add('user-is-tabbing');
    });
  });
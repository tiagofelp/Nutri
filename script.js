/* Menu para telas menores: mantém o estado acessível em aria-expanded. */
const menuButton = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('#mobile-nav');

if (menuButton && mobileMenu) {
  const menuIcon = menuButton.querySelector('i');

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';

    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute(
      'aria-label',
      open ? 'Fechar menu' : 'Abrir menu'
    );

    if (menuIcon) {
      menuIcon.classList.toggle('fa-bars', !open);
      menuIcon.classList.toggle('fa-xmark', open);
    }

    mobileMenu.hidden = !open;
  });

  /* Fecha o menu depois de selecionar uma seção. */
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');

      if (menuIcon) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    });
  });
}

/* O FAQ usa <details> nativo: funciona inclusive com JavaScript desativado. */

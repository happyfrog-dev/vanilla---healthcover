export function initNav() {
  const nav = document.getElementById('main-nav');
  const hamburger = nav?.querySelector('.nav__hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu?.querySelectorAll('.mobile-menu__link, .mobile-menu__cta');

  const handleScroll = () => {
    nav?.classList.toggle('is-scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    hamburger.classList.toggle('is-open', !isOpen);
    if (isOpen) {
      mobileMenu?.setAttribute('hidden', '');
    } else {
      mobileMenu?.removeAttribute('hidden');
    }
  });

  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.setAttribute('aria-expanded', 'false');
      hamburger?.classList.remove('is-open');
      mobileMenu?.setAttribute('hidden', '');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      hamburger?.setAttribute('aria-expanded', 'false');
      hamburger?.classList.remove('is-open');
      mobileMenu?.setAttribute('hidden', '');
    }
  });
}
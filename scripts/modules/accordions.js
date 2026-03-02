export function initAccordions() {
  const triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(trigger => {
    const panelId = trigger.getAttribute('aria-controls');
    if (!panelId) return;
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const initExpanded = trigger.getAttribute('aria-expanded') === 'true';
    if (!initExpanded) {
      panel.setAttribute('hidden', '');
    }

    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!expanded));

      if (expanded) {
        panel.style.opacity = '0';
        panel.style.transition = 'opacity 180ms ease';
        setTimeout(() => {
          panel.setAttribute('hidden', '');
          panel.style.opacity = '';
          panel.style.transition = '';
        }, 180);
      } else {
        panel.removeAttribute('hidden');
        void panel.offsetHeight;
      }
    });
  });
}
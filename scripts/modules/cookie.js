export function initCookie() {
  const overlay    = document.getElementById('cookie-overlay');
  const acceptAll  = document.getElementById('accept-all');
  const declineNon = document.getElementById('decline-non');
  const manageBtn  = document.getElementById('manage-prefs');
  const prefsPanel = document.getElementById('cookie-prefs');
  const showLess   = document.getElementById('show-less');
  const saveBtn    = document.getElementById('save-settings');

  if (!overlay) return;

  try {
    if (localStorage.getItem('hc_cookie_consent')) {
      overlay.classList.add('is-hidden');
      return;
    }
  } catch (_) { }

  trapFocus(overlay);

  acceptAll?.addEventListener('click', () => {
    saveConsent({ necessary: true, functional: true, analytics: true, performance: true, advertisement: true });
    closeBanner();
  });

  declineNon?.addEventListener('click', () => {
    saveConsent({ necessary: true, functional: false, analytics: false, performance: false, advertisement: false });
    document.querySelectorAll('.cookie-toggle-input').forEach(inp => { inp.checked = false; });
    closeBanner();
  });

  manageBtn?.addEventListener('click', () => {
    const expanded = manageBtn.getAttribute('aria-expanded') === 'true';
    manageBtn.setAttribute('aria-expanded', String(!expanded));
    if (expanded) {
      prefsPanel?.setAttribute('hidden', '');
    } else {
      prefsPanel?.removeAttribute('hidden');
    }
  });

  showLess?.addEventListener('click', () => {
    prefsPanel?.setAttribute('hidden', '');
    manageBtn?.setAttribute('aria-expanded', 'false');
  });

  saveBtn?.addEventListener('click', () => {
    const prefs = { necessary: true };
    document.querySelectorAll('.cookie-toggle-input').forEach(inp => {
      prefs[inp.dataset.category] = inp.checked;
    });
    saveConsent(prefs);
    closeBanner();
  });

  function closeBanner() {
    overlay.style.transition = 'opacity 250ms ease';
    overlay.style.opacity = '0';
    setTimeout(() => overlay.classList.add('is-hidden'), 250);
  }

  function saveConsent(prefs) {
    try {
      localStorage.setItem('hc_cookie_consent', JSON.stringify(prefs));
    } catch (_) {  }
  }

  function trapFocus(element) {
    const focusable = element.querySelectorAll(
      'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    element.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first?.focus(); }
      }
      if (e.key === 'Escape') closeBanner();
    });

    setTimeout(() => first?.focus(), 100);
  }
}
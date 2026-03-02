export function initContactForm() {
  const form = document.getElementById('contact-form');
  const successEl = document.getElementById('contact-success');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;

    const nameInput  = document.getElementById('cf-name');
    const emailInput = document.getElementById('cf-email');

    clearErrors(form);

    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your first name');
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address');
      valid = false;
    }

    if (!valid) return;

    const submitBtn = form.querySelector('.contact__submit');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting…';

    await new Promise(r => setTimeout(r, 1200));

    submitBtn.disabled = false;
    submitBtn.textContent = originalText;

    form.querySelectorAll('.form-group, .contact__submit, .contact__disclaimer')
        .forEach(el => el.style.display = 'none');
    successEl.removeAttribute('hidden');
  });

  function clearErrors(container) {
    container.querySelectorAll('.form-input').forEach(inp => {
      inp.classList.remove('is-error');
    });
    container.querySelectorAll('.form-error').forEach(el => {
      el.textContent = '';
    });
  }

  function showError(input, message) {
    input.classList.add('is-error');
    const errorEl = input.nextElementSibling;
    if (errorEl && errorEl.classList.contains('form-error')) {
      errorEl.textContent = message;
    }
    input.focus();
  }
}
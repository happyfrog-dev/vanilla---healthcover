import { testimonials } from '../data.js';

export function initTestimonials() {
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  if (!track) return;

  let currentIndex = 0;
  const getVisible = () => window.innerWidth >= 768 ? 2 : 1;

  function renderCards() {
    const visible = getVisible();
    track.innerHTML = '';
    const items = [];
    for (let i = 0; i < 1; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    items.forEach(t => {
      const card = document.createElement('article');
      card.className = 'testimonial-card';
      card.setAttribute('aria-label', `Testimonial from ${t.name}`);
      card.innerHTML = `
        <div class="testimonial-card__avatar" style="background:${t.avatarBg}" aria-hidden="true">
          <img src="assets/people/avatar-${t.id}.svg" alt="${t.name}" />
        </div>
        <div class="testimonial-card__body">
          <p class="testimonial-card__quote">${t.quote}</p>
          <div class="testimonial-card__container-author">
            <p class="testimonial-card__author">– ${t.name}</p>
          </div>
        </div>
      `;
      track.appendChild(card);
    });
    track.style.opacity = '0';
    requestAnimationFrame(() => {
      track.style.transition = 'opacity 240ms ease';
      track.style.opacity = '1';
    });
  }

  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    renderCards();
  });
  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    renderCards();
  });

  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextBtn?.click();
    if (e.key === 'ArrowLeft') prevBtn?.click();
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderCards, 200);
  });

  renderCards();
}
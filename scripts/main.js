import { initNav }          from './modules/nav.js';
import { initAccordions }   from './modules/accordions.js';
import { initTestimonials } from './modules/testimonials.js';
import { initContactForm }  from './modules/contactForm.js';
import { initCookie }       from './modules/cookie.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAccordions();
  initTestimonials();
  initContactForm();
  initCookie();
});
/* Fresh Lines Painting — nav, reveal, lightbox */

(() => {
  const burger = document.querySelector('.burger');
  const mnav = document.getElementById('mnav');
  if (burger && mnav) {
    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      mnav.hidden = open;
      document.body.style.overflow = open ? '' : 'hidden';
    });
    mnav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        burger.setAttribute('aria-expanded', 'false');
        mnav.hidden = true;
        document.body.style.overflow = '';
      }
    });
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduce && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll(
      '.sechead, .svc li, .gal__item, .steps li, .bigsteps li, .std__list li, .cbox, .frame, .rules li, .arch, .hero__stats, .phero h1, .phero p, .intro__body p, .svcsec__media, .svcsec__body, .area__list li'
    );
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('on');
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    targets.forEach((el, i) => {
      el.classList.add('rv');
      el.style.transitionDelay = `${Math.min((i % 6) * 45, 220)}ms`;
      io.observe(el);
    });

    // catch-up for anything already scrolled past on load
    setTimeout(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < innerHeight && r.bottom > 0) el.classList.add('on');
      });
    }, 120);
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // lightbox on the work page
  const lb = document.getElementById('lightbox');
  if (lb) {
    const buttons = [...document.querySelectorAll('[data-lightbox]')];
    const img = lb.querySelector('.lb__img');
    const cap = lb.querySelector('.lb__cap');
    let index = 0;
    const show = (i) => {
      index = (i + buttons.length) % buttons.length;
      const b = buttons[index];
      img.src = b.dataset.full;
      img.alt = b.dataset.label;
      cap.textContent = b.dataset.label;
    };
    const open = (i) => {
      show(i);
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
      lb.querySelector('.lb__close').focus();
    };
    const close = () => {
      lb.hidden = true;
      document.body.style.overflow = '';
      buttons[index].focus();
    };
    buttons.forEach((b, i) => b.addEventListener('click', () => open(i)));
    lb.querySelector('.lb__close').addEventListener('click', close);
    lb.querySelector('.lb__prev').addEventListener('click', () => show(index - 1));
    lb.querySelector('.lb__next').addEventListener('click', () => show(index + 1));
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    addEventListener('keydown', (e) => {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
  }

  // native form validation + scroll to first invalid field
  const form = document.querySelector('[data-quote]');
  if (form) {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
      }
    });
  }
})();

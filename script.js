  // ── Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ── Lazy video playback: only download/play videos near the viewport
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { rootMargin: '200px 0px' });

  document.querySelectorAll('video[data-autoplay]').forEach(v => videoObserver.observe(v));

  // ── Scroll-spy: highlight the catalog link of the section in view
  const spyLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const spySections = [...spyLinks]
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (spySections.length) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          spyLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        } else if (link.classList.contains('active')) {
          link.classList.remove('active');
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });

    spySections.forEach(s => spyObserver.observe(s));
  }

  // ── Mobile menu
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.nav-hamburger');
    const open = menu.classList.toggle('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.nav-hamburger');
    if (!menu || !hamburger) return;
    // close after tapping a menu link, or clicking outside
    if (menu.classList.contains('open') &&
        (e.target.closest('#mobileMenu a') || (!menu.contains(e.target) && !hamburger.contains(e.target)))) {
      menu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

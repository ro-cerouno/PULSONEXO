// PULSONEXO — comportamiento compartido
document.addEventListener('DOMContentLoaded', function () {

  // Scroll reveal
  var items = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && items.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in-view'); });
  }

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? 'CERRAR' : 'MENÚ';
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.textContent = 'MENÚ';
      });
    });
  }

  // Light parallax on hero images
  var heroImgs = document.querySelectorAll('[data-parallax]');
  if (heroImgs.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      heroImgs.forEach(function (img) {
        img.style.transform = 'translateY(' + (y * 0.12) + 'px) scale(1.08)';
      });
    }, { passive: true });
  }
});

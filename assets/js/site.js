// Mobile nav toggle
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Photo carousel: manual-advance only (arrows/dots), never auto-rotates,
// so it doesn't move while people are reading next to it.
(function () {
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var slides = root.querySelectorAll('.carousel-slide');
    var dots = root.querySelectorAll('.carousel-dot');
    var idx = 0;
    function show(i) {
      idx = (i + slides.length) % slides.length;
      slides.forEach(function (s, n) { s.classList.toggle('is-active', n === idx); });
      dots.forEach(function (d, n) { d.classList.toggle('is-active', n === idx); });
    }
    root.querySelector('.prev').addEventListener('click', function () { show(idx - 1); });
    root.querySelector('.next').addEventListener('click', function () { show(idx + 1); });
    dots.forEach(function (d, n) { d.addEventListener('click', function () { show(n); }); });
  });
})();

// Footer year
document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

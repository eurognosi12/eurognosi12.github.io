// Mobile menu toggle
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

// Alf app icons: Google Play by default, App Store on iPhone/iPad
(function () {
  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (!ios) return;
  document.querySelectorAll('.app-link[data-ios]').forEach(function (a) {
    a.href = a.getAttribute('data-ios');
  });
})();

// Contact form: GitHub Pages has no server, so the form opens the visitor's
// email app with the message filled in, addressed to the school.
(function () {
  var form = document.querySelector('.contact-form');
  if (!form) return;
  var to = form.getAttribute('data-to');
  var msg = form.querySelector('.form-msg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var subject = form.elements.subject.value.trim() || 'Μήνυμα από την ιστοσελίδα';
    var body = form.elements.message.value.trim();
    var text = body + '\n\n— ' + name + (email ? ' (' + email + ')' : '');
    window.location.href = 'mailto:' + to +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(text);
    if (msg) msg.textContent = 'Thanks for submitting!';
    form.reset();
  });
})();

// Gallery lightbox
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.gallery a'));
  if (!links.length) return;
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML =
    '<button class="lb-close" aria-label="Κλείσιμο">&times;</button>' +
    '<button class="lb-prev" aria-label="Προηγούμενη">&#8249;</button>' +
    '<img alt="">' +
    '<button class="lb-next" aria-label="Επόμενη">&#8250;</button>';
  document.body.appendChild(box);
  var img = box.querySelector('img');
  var index = 0;

  function show(i) {
    index = (i + links.length) % links.length;
    img.src = links[index].href;
    img.alt = links[index].querySelector('img').alt;
    box.classList.add('open');
  }
  function close() { box.classList.remove('open'); }

  links.forEach(function (a, i) {
    a.addEventListener('click', function (e) { e.preventDefault(); show(i); });
  });
  box.querySelector('.lb-close').addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', function () { show(index - 1); });
  box.querySelector('.lb-next').addEventListener('click', function () { show(index + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
})();

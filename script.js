(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const year = document.getElementById('year');
  const cards = document.querySelectorAll('[data-tilt]');
  const revealItems = document.querySelectorAll('.reveal');

  year.textContent = new Date().getFullYear();

  const storageKey = 'portfolio-theme';
  const storedTheme = localStorage.getItem(storageKey);
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const activeTheme = storedTheme || (prefersLight ? 'light' : 'dark');
  root.setAttribute('data-theme', activeTheme);

  toggle.addEventListener('click', () => {
    const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && !('ontouchstart' in window)) {
    cards.forEach((card) => {
      card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
      });
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));

  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let stars = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.min(140, Math.floor((width * height) / 12000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.8 + 0.2,
    }));
  }

  function draw() {
    if (reduceMotion) {
      ctx.clearRect(0, 0, width, height);
      return;
    }

    ctx.clearRect(0, 0, width, height);
    for (const star of stars) {
      star.y += 0.2 * star.z;
      if (star.y > height) {
        star.y = 0;
        star.x = Math.random() * width;
      }
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.z * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = root.getAttribute('data-theme') === 'light'
        ? 'rgba(0, 95, 209, 0.55)'
        : 'rgba(126, 191, 255, 0.8)';
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
})();

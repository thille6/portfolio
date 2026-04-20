const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursorDot) {
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  }
});

function animateCursor() {
  if (!cursor) {
    return;
  }
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  requestAnimationFrame(animateCursor);
}
if (cursor) {
  animateCursor();
}

document.querySelectorAll('a, button, .project-card, .card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (cursor) {
      cursor.classList.add('hover');
    }
  });
  el.addEventListener('mouseleave', () => {
    if (cursor) {
      cursor.classList.remove('hover');
    }
  });
});

const canvas = document.getElementById('particles');
const ctx = canvas ? canvas.getContext('2d') : null;
let width = 0;
let height = 0;
if (canvas) {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', () => {
  if (!canvas) {
    return;
  }
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const particles = [];
const particleCount = canvas ? Math.min(80, Math.floor((width * height) / 20000)) : 0;

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.color = Math.random() > 0.5 ? '0, 212, 255' : '255, 107, 53';
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 150) {
      const angle = Math.atan2(dy, dx);
      const force = (150 - dist) / 150;
      this.x -= Math.cos(angle) * force * 2;
      this.y -= Math.sin(angle) * force * 2;
    }

    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }

  draw() {
    if (!ctx) {
      return;
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    ctx.fill();
  }
}

for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function connectParticles() {
  if (!ctx) {
    return;
  }
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  if (!ctx) {
    return;
  }
  ctx.clearRect(0, 0, width, height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  connectParticles();
  requestAnimationFrame(animateParticles);
}
if (ctx) {
  animateParticles();
}

const revealElements = document.querySelectorAll('.reveal, .stagger-reveal');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

revealElements.forEach(el => observer.observe(el));

document.querySelectorAll('.project-card').forEach(card => {
  const btn = card.querySelector('.project-btn');
  btn.addEventListener('click', () => {
    const isExpanded = card.dataset.expanded === 'true';

    document.querySelectorAll('.project-card').forEach(c => {
      c.dataset.expanded = 'false';
    });

    if (!isExpanded) {
      card.dataset.expanded = 'true';
    }
  });
});

const toggleBtn = document.getElementById('toggleContact');
const contactInfo = document.getElementById('contactInfo');

if (toggleBtn && contactInfo) {
  toggleBtn.addEventListener('click', () => {
    const isVisible = contactInfo.classList.contains('show');
    contactInfo.classList.toggle('show', !isVisible);
    const label = toggleBtn.querySelector('span');
    const icon = toggleBtn.querySelector('svg');
    if (label) {
      label.textContent = isVisible ? 'Visa kontaktuppgifter' : 'Dölj kontaktuppgifter';
    }
    if (icon) {
      icon.style.transform = isVisible ? '' : 'rotate(180deg)';
    }
  });
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 150;
  sections.forEach(section => {
    const top = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
});

document.querySelectorAll('.cta-btn, .contact-toggle').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible'));

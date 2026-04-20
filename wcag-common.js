document.querySelectorAll('.project-card').forEach(card => {
  const btn = card.querySelector('.project-btn');
  btn.addEventListener('click', () => {
    const isExpanded = card.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.project-card').forEach(c => {
      c.setAttribute('aria-expanded', 'false');
      c.querySelector('.project-btn').setAttribute('aria-expanded', 'false');
    });
    if (!isExpanded) {
      card.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

const toggleBtn = document.getElementById('toggleContact');
const contactInfo = document.getElementById('contactInfo');
if (toggleBtn && contactInfo) {
  toggleBtn.addEventListener('click', () => {
    const isVisible = contactInfo.classList.contains('show');
    contactInfo.classList.toggle('show', !isVisible);
    toggleBtn.setAttribute('aria-expanded', String(!isVisible));
    toggleBtn.textContent = isVisible ? 'Visa kontaktuppgifter' : 'Dölj kontaktuppgifter';
  });
}

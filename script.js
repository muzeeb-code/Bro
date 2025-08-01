// Responsive mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
});

// Scroll-based fade-up animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-up');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.2,
});

// Observe all fade-up sections
document.querySelectorAll('.fade-up').forEach(section => {
  observer.observe(section);
});
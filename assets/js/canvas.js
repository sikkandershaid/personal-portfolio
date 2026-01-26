// Matrix Rain Effect
const canvas = document.getElementById('matrixRain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[| `]}';
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
}

function drawMatrix() {
  ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0';
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = i % 3 === 0 ? '#0F0' : i % 3 === 1 ? '#0FF' : '#F0F';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Animate progress bars on scroll
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.neon-progress-bar');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.transition = 'width 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
      bar.style.width = width;
    }, 500);
  });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      if (entry.target.classList.contains('dark-card')) {
        animateProgressBars();
      }
    }
  });
}, { threshold: 0.1 });

// Initialize
document.addEventListener('DOMContentLoaded', function () {
  // Set up matrix rain
  setInterval(drawMatrix, 50);

  // Animate cards on load
  document.querySelectorAll('.dark-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    observer.observe(card);
  });

  // Window resize handler
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});

// Add typing effect to terminal-like text
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

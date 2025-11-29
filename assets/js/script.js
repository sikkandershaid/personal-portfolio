
// Mobile Nav Open Close
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');

  // Open sidebar and overlay
  menuBtn.addEventListener('click', () => {
      sidebar.classList.add('active');
      overlay.classList.add('active');
  });

  // Close sidebar and overlay
  const closeSidebar = () => {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
  };

  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar); // Close when clicking outside the sidebar
});

// ScrollReveal Animation---------
const sr = ScrollReveal({
	origin: 'bottom',
	distance: '40px',
	duration: 800,
	delay: 400,
	// reset: true
})

sr.reveal('.Class-name', {
	distance: '20px',
	origin: 'top',
})

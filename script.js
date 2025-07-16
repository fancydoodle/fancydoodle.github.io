
    // Modal handlers
const modal = document.getElementById('videoModal');
const openModal = document.getElementById('watchDemo');
const closeModal = document.getElementById('closeModal');
const iframe = modal.querySelector('iframe');

function closeModalFn() {
  modal.classList.add('hidden');
  video.currentTime = 0; // Restart from beginning
  video.play();

  // Optional: Stop video playback by resetting src
  if (iframe) {
    const src = iframe.src;
    iframe.src = ''; // Clear first to unload
    iframe.src = src; // Restore
  }
}

openModal.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', closeModalFn);

// Close when clicking outside the modal content
modal.addEventListener('click', e => {
  if (e.target === modal) {
    closeModalFn();
  }
});

// Close on ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModalFn();
  }
});

// Close when video ends (for <video> tag only, not iframe)
const video = modal.querySelector('video');
if (video) {
  video.addEventListener('ended', closeModalFn);
}





    // Scroll fade-in animation
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));







// eyes
const circles = document.querySelectorAll('.circle');

window.addEventListener('mousemove', e => {
  circles.forEach(circle => {
    const rect = circle.getBoundingClientRect();
    const pupil = circle.querySelector('.pupil');

    // center of the eye
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    // vector from eye center to mouse
    const dx = e.clientX - eyeCenterX;
    const dy = e.clientY - eyeCenterY;

    // distance & max movement radius for pupil inside eye
    const distance = Math.min(Math.sqrt(dx*dx + dy*dy), 10); // max 10px movement
    const angle = Math.atan2(dy, dx);

    // new pupil position relative to center (in px)
    const pupilX = 50 + distance * Math.cos(angle); // percents for left
    const pupilY = 50 + distance * Math.sin(angle); // percents for top

    // set pupil position using % inside the eye circle
    pupil.style.left = `${pupilX}%`;
    pupil.style.top = `${pupilY}%`;
    pupil.style.transform = 'translate(-50%, -50%)';
  });
});

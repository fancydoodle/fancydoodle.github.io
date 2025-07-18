const modal = document.getElementById('videoModal');
const openModal = document.getElementById('watchDemo');
const closeModal = document.getElementById('closeModal');
const iframe = modal.querySelector('iframe');
const video = modal.querySelector('video');

function openModalFn() {
  modal.classList.remove('hidden');
  modal.classList.add('flex');

  if (video) {
    video.currentTime = 0; // restart
    video.play();          // start playing
  }

  // For iframe (e.g. YouTube), you can reload src to autoplay if needed
  if (iframe) {
    const src = iframe.src;
    iframe.src = '';       // Reset iframe to stop video
    iframe.src = src;      // Reload iframe to start fresh
  }
}

function closeModalFn() {
  // Exit fullscreen if active / video
  if (document.fullscreenElement === video) {
    document.exitFullscreen();
  }


  modal.classList.add('hidden');
  modal.classList.remove('flex');

  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  if (iframe) {
    iframe.src = '';
  }
}

openModal.addEventListener('click', openModalFn);
closeModal.addEventListener('click', closeModalFn);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModalFn();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalFn();
});

// Video end event close modal (if <video> tag)
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

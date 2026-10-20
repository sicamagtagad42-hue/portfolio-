// Show "Back to Top" when scrolling down
window.addEventListener('scroll', function () {
  const backToTop = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});